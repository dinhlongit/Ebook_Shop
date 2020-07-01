import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "./../../actions/category";
import * as modalActions from "./../../actions/modal";
import CategoryForm from "../CategoryForm";
import CategoryItem from "../../components/CategoryItem";


class Category extends Component {
  componentDidMount() {
    const { categoryActionCreators } = this.props;
    const { fetchListCategoryAdmin } = categoryActionCreators;
    fetchListCategoryAdmin(1);
  }

  openForm = () => {
    const { modalActionCreators } = this.props;
    //const { setTaskEditing } = categoryActionCreators;
    // setTaskEditing(null);
    const {
      showModal,
      changeModalTitle,
      changeModalContent,
    } = modalActionCreators;
    showModal();
    changeModalTitle("Thêm mới category");
    changeModalContent(<CategoryForm />);
  };

  showModalEditCategory = (category) => {
    const { categoryActionCreators, modalActionCreators } = this.props;
    const { setCategoryEditing } = categoryActionCreators;
    setCategoryEditing(category);
    const {
      showModal,
      changeModalTitle,
      changeModalContent,
    } = modalActionCreators;
    showModal();
    changeModalTitle("Cập nhật category");
    changeModalContent(<CategoryForm />);
  };

  showModalDeleteCategory = (category) => {
    const { modalActionCreators } = this.props;
    const {
      showModal,
      hideModal,
      changeModalTitle,
      changeModalContent,
    } = modalActionCreators;
    showModal();
    changeModalTitle("Xóa công việc");
    changeModalContent(
      <div>
        <div className="modal-body">
          {" "}
          Bạn chắc chắn muốn xóa {category.name}
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={hideModal}
          >
            Close
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.handleDeleteCategory(category)}
          >
            ĐỒNG Ý
          </button>
        </div>
      </div>
    );
  };

  handlePaginate = (page) => { 
    const { categoryActionCreators } = this.props;
    const { fetchListCategoryAdmin } = categoryActionCreators;
    fetchListCategoryAdmin(page);
  };

  renderPage = () => {
    let xhtml = null;
    const totalPage = [];
    for (let i = 1; i <= this.props.data.last_page; i++) {
      totalPage.push(i);
    }
    xhtml = totalPage.map((index) => {
      return (
        <li key={index} className="page-item">
          <button
            className="page-link"
            name="page"
            onClick={(e) => {
              this.handlePaginate(index);
            }}
          >
            {index}
          </button>
        </li>
      );
    });
    return xhtml;
  };

  handleDeleteCategory(category) {
    const { id } = category;
    const { categoryActionCreators } = this.props;
    const { deleteCategory } = categoryActionCreators;
    deleteCategory(id);
  }

  renderCategory = () => {
    let { data } = this.props.data;

    if (data === undefined) {
      data = [{}];
    }

    let xhtml = null;
    xhtml = data.map((category, index) => {
      return (
        <CategoryItem
          key={index}
          category={category}
          onClickDelete={this.showModalDeleteCategory}
          onClickEdit={this.showModalEditCategory}
        />
      );
    });
    return xhtml;
  };


  render() {   
    return (
      <div>
            <main>
        <div className="container-fluid">
          <h1 className="mt-2">Category</h1>

          <ol className="breadcrumb mb-2">
            <li className="breadcrumb-item">
              <a href="index.html">Admin</a>
            </li>
            <li className="breadcrumb-item active">Category</li>
          </ol>

          <div className="card mb-2" />
          <button
            type="button"
            className="btn btn-primary mb-2"
            onClick={this.openForm}
          >
            <i className="fas fa-category-plus"></i>
          </button>
          <div className="card mb-2">
            <div className="card-header">
              <i className="fas fa-table mr-1" />
              DataTable category
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead className="thead-dark">
                    <tr>
                      <th>id</th>
                      <th>name</th>
                      <th>parrent_id</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderCategory()}</tbody>
                </table>
              </div>

              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <button
                      className="page-link"
                      onClick={(e) => {
                        this.handlePaginate(
                          parseInt(this.props.data.current_page) - 1
                        );
                      }}
                    >
                      <span aria-hidden="true">«</span>
                    </button>
                  </li>

                  {this.renderPage()}

                  <li className="page-item">
                    <a
                      className="page-link"
                      onClick={(e) => {
                        this.handlePaginate(
                          parseInt(this.props.data.current_page) + 1
                        );
                      }}
                    >
                      <span aria-hidden="true">»</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.category.listCategoryAdmin,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    categoryActionCreators: bindActionCreators(categoryActions, dispatch),
     modalActionCreators: bindActionCreators(modalActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
