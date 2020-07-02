import React, { Component } from "react";
var link = "http://localhost:8000/upload/product/";
class UserItem extends Component {
  onClickDelete = (product) => {
    this.props.onClickDelete(product);
  };
  onClickEdit = (product) => {
    this.props.onClickEdit(product);
  };
  render() {
    const { product } = this.props;
    const {
      id,
      name,
      photo,
      description,
      amount,
      price,
      discount,
      information,
      category,
      producer,
      status
    } = product;

    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>
          <img src={`${link}${photo}`}  height="100px" width="100px"/>
        </td>
       
        <td>{description}</td>
        <td>{amount}</td>
        <td>{price}</td>
        <td>{discount}</td>
        <td>{information}</td>
        <td>{category}</td>
        <td>{producer}</td>
        <td>{status}</td>
        <td>
          <div className="btn-group float-right">
            <button
              className="btn btn-outline-danger"
              onClick={() => this.onClickDelete(product)}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
            <button
              className="btn btn-outline-info"
              onClick={() => this.onClickEdit(product)}
            >
              <i className="fas fa-edit"></i>
            </button>
          </div>
        </td>
      </tr>
    );
  }
}

export default UserItem;
