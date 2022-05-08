import "./style.css";
import Button from "../Button";

function InputBox(props) {
  return (
    <div className={"flex input-box"}>
      <input
        onChange={props.handleChange}
        value={props.value}
        type="text"
        placeholder={"Enter task"}
      />
      <Button
        disabled={!props.value}
        isWhite={true}
        onClick={props.handleAdd}
        id={"add"}
        style={{
          background: !props.value && "lightgray",
        }}
      >
        Add
      </Button>
    </div>
  );
}

export default InputBox;
