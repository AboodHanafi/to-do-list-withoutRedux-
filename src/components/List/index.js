import ListIem from "../ListIem";
import "./style.css";

function List(props) {
  return (
    <section className={"list flex"}>
      {props.items.map((item) => (
        <ListIem
          onDelete={props.onDeleteToHome}
          title={item.title}
          id={item.id}
          key={`${item.id}`}
        />
      ))}
    </section>
  );
}

export default List;
