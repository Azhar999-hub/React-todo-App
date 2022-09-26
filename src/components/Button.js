function Button(props) {
  return <button onClick={props.click} className="button">{props.btnValue}</button>;
}
export default Button;
