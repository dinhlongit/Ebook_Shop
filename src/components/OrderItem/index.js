import React, { Component } from "react";

class OrderItem extends Component {

    onClickDelete = (order) => {
        this.props.onClickDelete(order);
      };

  render() {
    const { order } = this.props;
    const {
      id,
      user_id,
      full_name,
      street,
      city,
      phone_number,
      name,
      total,
      status,
    } = order;
    return (
      <tr>
        <td>{id}</td>
        <td>{user_id}</td>
        <td>{full_name}</td>
        <td>{street}</td>
        <td>{city}</td>
        <td>{phone_number}</td>
        <td>{name}</td>
        <td>{total}</td>
        <td>{status}</td>
        <td>
          <div className="btn-group float-right">
            <button
              className="btn btn-outline-danger"
              onClick={() => this.onClickDelete(order)}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
            <button
              className="btn btn-outline-info"
              onClick={() => this.onClickEdit(order)}
            >
              <i className="fas fa-edit"></i>
            </button>
          </div>
        </td>
      </tr>
    );
  }
}

export default OrderItem;
