import React, { Component } from "react";

class ProducerItem extends Component {
  onClickDelete = (producer) => {
    this.props.onClickDelete(producer);
  };

  onClickEdit = (producer) => {
    this.props.onClickEdit(producer);
  };

  render() {
    const { producer } = this.props;
    const { id, name } = producer;
    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>
          <div className="btn-group float-right">
            <button
              className="btn btn-outline-danger"
              onClick={() => this.onClickDelete(producer)}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
            <button
              className="btn btn-outline-info"
              onClick={() => this.onClickEdit(producer)}
            >
              <i className="fas fa-edit"></i>
            </button>
          </div>
        </td>
      </tr>
    );
  }
}

export default ProducerItem;
