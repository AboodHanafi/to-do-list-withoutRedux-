import "./style.css";
import InputBox from "../../components/InputBox";
import List from "../../components/List";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [state, setState] = useState({
    value: "",
    items: [],
    isLoading: true,
  });

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      const data = res.data;
      setState({
        ...state,
        items: data.slice(0 - 10),
        isLoading: false,
      });
    });
  }, []);

  const handleChange = (e) => {
    setState({
      ...state,
      value: e.target.value,
    });
  };

  const handleAdd = () => {
    setState({
      ...state,
      items: [
        ...state.items,
        {
          title: state.value,
          id: Math.random() * 20000,
        },
      ],
      value: "",
      isLoading: false,
    });
  };

  const handleDelete = (id) => {
    const newArray = state.items.filter((item) => item.id !== id);
    setState({
      ...state,
      items: newArray,
    });
  };

  return (
    <div className={"inner-container"}>
      <h1>To Do List App</h1>
      <InputBox
        value={state.value}
        handleChange={handleChange}
        handleAdd={handleAdd}
      />

      {state.isLoading ? (
        <h1> loading ... </h1>
      ) : (
        <List onDeleteToHome={handleDelete} items={state.items} />
      )}
    </div>
  );
};

export default Home;
