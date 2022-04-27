import './style.css'

function Button({ isWhite, ...props }) {
  return (
    <button {...props} className={isWhite && "white"}>
      {props.children}
    </button>
  );
}

export default Button;