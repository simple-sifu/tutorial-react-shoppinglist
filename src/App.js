import React from "react";
import "./styles.css";

class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      itemArray: [
        "Notebook",
        "Jello",
        "Spinach",
        "Rice",
        "Birthday Cake",
        "Candles"
      ],
      itemName: ""
    };
  }

  addItem(e) {
    const inputValue = e.target.value;
    this.setState({ itemName: inputValue });
    console.log(inputValue);
  }

  onSubmit(e) {
    console.log("onSubmit e.target.value=", e.target.value);
    this.setState({
      itemArray: [...this.state.itemArray, this.state.itemName]
    });
    console.log("this.state =", this.state);
  }

  render() {
    return (
      <div className="App">
        <h1>ShoppingList</h1>
        <h2>Get it done today</h2>
        <h2>No excuses</h2>
        <input placeholder="enter items" onChange={this.addItem} />
        <button type="submit" onClick={this.onSubmit}>
          Add New Item
        </button>
        <ul>
          {this.state.itemArray.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default ShoppingList;
