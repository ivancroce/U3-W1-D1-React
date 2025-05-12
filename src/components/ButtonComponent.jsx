const ButtonComponent = (props) => {
  return <button className={`btn ${props.className}`}>{props.text}</button>;
};

export default ButtonComponent;
