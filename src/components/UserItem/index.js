import React, { Component } from "react";

class UserItem extends Component {
  onClickDelete = (user) => {
    this.props.onClickDelete(user);
  };
  onClickEdit = (user) => {
    this.props.onClickEdit(user);
  };
  render() {
    const { user } = this.props;
    const { id, name, email, birthday, role } = user;

    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td> 
        <td>{email}</td>    
        <td>{birthday}</td>
        <td>{role}</td>
        <td>
          <div className="btn-group float-right">
            <button
              className="btn btn-outline-danger"
              onClick={() => this.onClickDelete(user)}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
            <button
              className="btn btn-outline-info"
              onClick={() => this.onClickEdit(user)}
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
