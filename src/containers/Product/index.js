import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "./../../actions/product";
import ProductItem from "../../components/ProductItem";
import * as modalActions from "./../../actions/modal";
import ProductForm from "../ProductForm";

class Product extends Component {
  componentDidMount() {
    const { productActionCreators } = this.props;
    const { fetchListProductAdmin } = productActionCreators;
    fetchListProductAdmin(1);
  }

  openForm = () => {
    const { modalActionCreators } = this.props;
    const {
      showModal,
      changeModalTitle,
      changeModalContent,
    } = modalActionCreators;
    showModal();
    changeModalTitle("Thêm mới product");
    changeModalContent(<ProductForm />);
  };

  showModalEditProduct = (product) => {
    const { productActionCreators, modalActionCreators } = this.props;
    const { setProductEditing } = productActionCreators;
    setProductEditing(product);
    const {
      showModal,
      changeModalTitle,
      changeModalContent,
    } = modalActionCreators;
    showModal();
    changeModalTitle("Cập nhật product");
    changeModalContent(<ProductForm />);
  };

  showModalDeleteProduct = (product) => {
    const { modalActionCreators } = this.props;
    const {
      showModal,
      hideModal,
      changeModalTitle,
      changeModalContent,
    } = modalActionCreators;
    showModal();
    changeModalTitle("Xóa Product");
    changeModalContent(
      <div>
        <div className="modal-body"> Bạn chắc chắn muốn xóa {product.name}</div>
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
            onClick={() => this.handleDeleteProduct(product)}
          >
            ĐỒNG Ý
          </button>
        </div>
      </div>
    );
  };

  handlePaginate = (page) => {
    const { productActionCreators } = this.props;
    const { fetchListProductAdmin } = productActionCreators;
    fetchListProductAdmin(page);
  };

  handleDeleteProduct(product) {
    const { id } = product;
    const { productActionCreators } = this.props;
    const { deleteProduct } = productActionCreators;
    deleteProduct(id);
  }

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

  renderProduct = () => {
    let data = this.props.data.data;

    if (data === undefined) {
      data = [];
    }
    
    console.log(data);
    let xhtml = null;
    xhtml = data.map((product, index) => {
      return (
        <ProductItem
          key={index}
          product={product}
          onClickDelete={this.showModalDeleteProduct}
          onClickEdit={this.showModalEditProduct}
        />
      );
    });
    return xhtml;
  };

  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    console.log(this.props.data);
    return (
      <main>
        <div className="container-fluid">
          <h1 className="mt-2">Product</h1>

          <ol className="breadcrumb mb-2">
            <li className="breadcrumb-item">
              <a href="index.html">Admin</a>
            </li>
            <li className="breadcrumb-item active">product</li>
          </ol>

          <div className="card mb-2" />
          <button
            type="button"
            className="btn btn-primary mb-2"
            onClick={this.openForm}
          >
            <i className="fas fa-product-plus"></i>
          </button>
          <div className="card mb-2">
            <div className="card-header">
              <i className="fas fa-table mr-1" />
              DataTable Product
            </div>
            <div className="card-body">
              <div className="table-responsive mb-2">
                <table className="table table-bordered">
                  <thead class="thead-dark">
                    <tr>
                      <th>id</th>
                      <th>name</th>
                      <th>photo</th>
                      <th>description</th>            
                      <th>amount</th>
                      <th>price</th>
                      <th>discount</th>
                      <th>information</th>
                      <th>category</th>
                      <th>producer</th>
                      <th>status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderProduct()}</tbody>
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
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state.product.listProductAdmin)
  return {
    data: state.product.listProductAdmin,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    productActionCreators: bindActionCreators(productActions, dispatch),
    modalActionCreators: bindActionCreators(modalActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
