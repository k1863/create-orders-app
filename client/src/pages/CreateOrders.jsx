import React from "react";
import CreateOrderForm from "../components/CreateOrderForm";

class CreateOrders extends React.Component {
  state = {
    code_id: "",
    quantity: "",
    item_value: "",
    discount: "",
    total_value: "",
    description: "",
    situation: "",
  };

  onSubmit = (data) => {
    this.setState({
      code_id: data.code_id,
      quantity: data.quantity,
      item_value: data.item_value,
      discount: data.discount,
      total_value: data.total_value,
      description: data.description,
      situation: data.situation,
    });

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        code_id: this.state.code_id,
        quantity: this.state.quantity,
        item_value: this.state.item_value,
        discount: this.state.discount,
        total_value: this.state.total_value,
        description: this.state.description,
        situation: this.state.situation,
      }),
    };
    fetch("/api/items", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  render() {
    return (
      <div className="container">
        <div className="mt-3">
          <h3>Create Order Item</h3>
          <CreateOrderForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}
export default CreateOrders;
