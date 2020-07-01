import React, { Component } from "react";
import * as modalActions from "./../../actions/modal";
import * as categoryActions from "./../../actions/category";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class CategoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      photo: "",
      parrent_id: "",
    };
  }

  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  };


  componentDidMount() {
    const { categoryActionCreators } = this.props;
    const { fetchListCategoryAdminFull } = categoryActionCreators;
    fetchListCategoryAdminFull();
  }

  
  componentWillReceiveProps(nextProps) {
    const { categoryEditing } = this.props;
    console.log(categoryEditing);
    if (categoryEditing) {
      this.setState({
        id: categoryEditing.id,
        name: categoryEditing.name,
        parrent_id: categoryEditing.parrent_id,
        photo: categoryEditing.photo,
      });
    }
  }

 

  handleOnSubmit = (event) => {
    event.preventDefault();
    const { id, name,photo, parrent_id } = this.state;
    const { categoryActionCreators } = this.props;
    const { addCategory, updateCategory } = categoryActionCreators;
    console.log(id);
    if (id) {
      updateCategory(name,photo, parrent_id);
    } else {
      addCategory(name,photo, parrent_id);
    }
  };

  render() {
    const { data,page } = this.props;
    const { modalActionCreators } = this.props;
    const { hideModal } = modalActionCreators;
    const { name,photo, parrent_id} = this.state;
    console.log(page);
    return (
      <div>
        <div className="modal-body">
          <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">
                name: *
              </label>
              <input
                type="text"
                className="form-control"
                id="recipient-name"
                name="name"
                value={name || ''}
                onChange={(event) => this.isChange(event)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">
                photo: *
              </label>
              <input
                type="text"
                className="form-control"
                id="recipient-name"
                name="photo"
                value={photo || ''}
                onChange={(event) => this.isChange(event)}
              />
            </div>


            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">
                Category parrent: *
              </label>
              <select
                className="form-control"
                name="parrent_id"
                value={parrent_id}
                onChange={(event) => this.isChange(event)}
              >
                <option>---</option>
                {data.map((value, key) => {
                  return (
                    <option key={key} value={value.id}>
                      {value.name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={hideModal}
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                ĐỒNG Ý
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.category.listCategoryAdminFull,
    page: state.category.page,
    categoryEditing: state.category.categoryEditing,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    modalActionCreators: bindActionCreators(modalActions, dispatch),
    categoryActionCreators: bindActionCreators(categoryActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm);
