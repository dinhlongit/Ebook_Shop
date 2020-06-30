import React, { Component } from "react";

class RoleItem extends Component {

    onClickDelete = (role) => {
        this.props.onClickDelete(role);
      };

  render() {
    const { role } = this.props;
    const {
      id,
      name
    } = role;
    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>
          <div className="btn-group float-right">
            <button
              className="btn btn-outline-danger"
              onClick={() => this.onClickDelete(role)}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
            <button
              className="btn btn-outline-info"
              onClick={() => this.onClickEdit(role)}
            >
              <i className="fas fa-edit"></i>
            </button>
          </div>
        </td>
      </tr>
    );
  }
}

export default RoleItem;
