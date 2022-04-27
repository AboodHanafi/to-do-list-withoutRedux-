import "./style.css";
import Button from "../Button";

function ListIem(props) {
  return (
    <div className={"flex item"}>
      <p className={"title"}>{props.title}</p>
      <Button onClick={() => props.onDelete(props.id)}>Delete</Button>
    </div>
  );
}

export default ListIem;
