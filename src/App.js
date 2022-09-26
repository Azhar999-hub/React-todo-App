import "./App.css";
import { useState } from "react";
import Button from "./components/Button";

function App() {
  let [txt, setTxt] = useState();
  let [list, setList] = useState([]);
 
  
  let add = () => {
    if (!txt) {
      alert("Text is Required");
      return;
    }
    list.push(txt);
    console.log(list);
    setList([...list]);
    setTxt("");
  };

  let delAll = () => {
    setList([]);
  };

  let edit = (id) => {
    let newEditItem = list.find((elem) => {
      return elem.id === id;
    });
    setTxt(newEditItem.value);
  };

  let del = ({ id }) => {
    const todos = [...list];
    todos.splice(id, 1);
    setList(todos);
  };

  return (
    <div className="App">
      <div className="inner-div">
        <header className="App-header">
          <h1>ToDo App</h1>
          <div>
            <input
              placeholder="Enter todo..."
              className="inp"
              value={txt}
              onChange={(e) => {
                setTxt(e.target.value);

                txt.value = " ";
              }}
            />
            &nbsp;
              <Button click={add} btnValue="Add" />
            &nbsp;
            <Button click={delAll} btnValue="Delete All" />
          </div>
          <ol className="style">
            {list.map((e, i) => {
              return (
                <li
                  className="list"
                  style={{
                    color: "#0084ff",
                   
                    textAlign: "start",
                  }}
                  key={i.id}
                >
                  {e} &nbsp;
                  <div className="list-button">
                    <Button click={edit} btnValue="Edit" />
                    &nbsp;
                    <Button click={del} btnValue="Delete" />
                  </div>
                </li>
              );
            })}
          </ol>
        </header>
      </div>
    </div>
  );
}

export default App;
