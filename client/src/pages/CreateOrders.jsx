import React from "react";
import OrderForm from "./OrderForm";
import fetch from "isomorphic-fetch";

class CreateOrderList extends React.Component {
  state = {
    items: {},
  };

  onSubmit = (data) => {
    this.setState({ items: data });

    fetch("/items", {
      method: "POST",
      mode: "CORS",
      body: JSON.stringify(this.state.items),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        res.json();
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => err);
    console.log(this.state.items);
  };

  render() {
    return (
      <div className="container">
        <div className="mt-3">
          <h3>Create Order Item</h3>
          <OrderForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}
export default CreateOrderList;
