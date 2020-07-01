import React, { Component } from "react";

class CategoryItem extends Component {
  onClickDelete = (category) => {
    this.props.onClickDelete(category);
  };
  onClickEdit=(category)=>{
    this.props.onClickEdit(category);
  }
  render() {
    const { category } = this.props;
    const {
      id,
      name,   
      parrent_id
    } = category;

    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>      
        <td>{parrent_id}</td>      
      
        <td>
          <div className="btn-group float-right">
            <button
              className="btn btn-outline-danger"
              onClick={() => this.onClickDelete(category)}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
            <button
              className="btn btn-outline-info"
              onClick={() => this.onClickEdit(category)}
            >
              <i className="fas fa-edit"></i>
            </button>
          </div>
        </td>
      </tr>
    );
  }
}

export default CategoryItem;
