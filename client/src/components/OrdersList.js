import React from "react";
import axios from "axios";
import "../App.css";
import { WindMillLoading } from "react-loadingg";

export default class OrdersList extends React.Component {
  state = {
    items: [],
  };

  componentDidMount() {
    axios.get("api/items").then((res) => {
      console.log(res.data);
      this.setState({ items: res.data });
    });
  }

  render() {
    console.log(this.state.items);
    const orderItems = this.state.items;
    return (
      <div className="container">
        <div className="mt-3">
          <h3>Order List</h3>
          {!this.state.items ? (
            <WindMillLoading />
          ) : (
            <table className="table table-dark table-striped mt-3 table">
              <thead>
                <tr>
                  <th>Order Number</th>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Situation</th>
                </tr>
              </thead>
              <tbody>
                {orderItems.map((orderItem) => (
                  <tr key={orderItem._id}>
                    <td>{orderItem._id}</td>
                    <td>{orderItem.createdAt}</td>
                    <td>{orderItem.description}</td>
                    <td>{orderItem.situation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    );
  }
}
