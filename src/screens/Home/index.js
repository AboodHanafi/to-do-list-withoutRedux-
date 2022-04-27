import "./style.css";
import InputBox from "../../components/InputBox";
import List from "../../components/List";
import { Component } from "react";

class Home extends Component {
  state = {
    value: "",
    items: [
      {
        title: "Nazeeh",
        id: Math.random() * 2000,
      },
    ],
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleAdd = () => {
    this.setState({
      items: [
        {
          title: this.state.value,
          id: Math.random() * 20000,
        },
        ...this.state.items,
      ],
      value: "",
    });
  };

  handleDelete = (id) => {
    const newArray = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: newArray,
    });
  };

  // isEmpty = (bool) => {
  //  if(this.state.)
  // }

  render() {
    return (
      <div className={"inner-container"}>
        <h1>To Do List App</h1>
        <InputBox
          value={this.state.value}
          handleChange={this.handleChange}
          handleAdd={this.handleAdd}
        />

        <List onDeleteToHome={this.handleDelete} items={this.state.items} />
      </div>
    );
  }
}

export default Home;
