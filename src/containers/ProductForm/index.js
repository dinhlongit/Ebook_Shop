import React, { Component } from "react";
import * as modalActions from "./../../actions/modal";
import * as producerActions from "./../../actions/producer";
import * as productActions from "./../../actions/product";
import * as productstatusActions from "./../../actions/productstatus";
import * as categoryActions from "./../../actions/category";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      photo: "",
      name: "",
      description: "",
      information: "",
      category_id: "",
      producer_id: "",
      status_id: "",
      amount: "",
      price: "",
      discount: "",
    };
  }

  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };


  isChangePhoto = (event) => {
    this.setState({
      photo: event.target.files[0],
    });
    // let reader = new FileReader();
    // reader.readAsDataURL(this.state.photo);
  };

  componentDidMount() {
    const {
      producerActionCreators,
      productstatusActionCreators,
      categoryActionCreators,
    } = this.props;
    const { fetchListProducer } = producerActionCreators;
    const { fetchListProductstatus } = productstatusActionCreators;
    const { fetchListSubCategory } = categoryActionCreators;
    fetchListProducer();
    fetchListProductstatus();
    fetchListSubCategory();
  }

  componentWillReceiveProps(nextProps) {
    const { productEditing } = this.props;
    if (productEditing) {
      this.setState({
        id: productEditing.id,
        photo: productEditing.photo,
        name: productEditing.name,
        description: productEditing.description,
        information: productEditing.information,
        category_id: productEditing.category_id,
        producer_id: productEditing.producer_id,
        status_id: productEditing.status_id,
        amount: productEditing.amount,
        price: productEditing.price,
        discount: productEditing.discount,
      });
    }
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("photo", this.state.photo);
    formData.append("name", this.state.name);
    formData.append("description", this.state.description);
    formData.append("information", this.state.information);
    formData.append("category_id", this.state.category_id);
    formData.append("producer_id", this.state.producer_id);
    formData.append("status_id", this.state.status_id);
    formData.append("amount", this.state.amount);
    formData.append("price", this.state.price);
    formData.append("discount", this.state.discount);

    const { productActionCreators } = this.props;
    const { addProduct, updateProduct } = productActionCreators;
    const { id } = this.state;
    if (id) {
      updateProduct(formData);
    } else {
      addProduct(formData);
    }
  };

  render() {
    const {
      dataProducer,
      dataProductstatus,
      dataCategory,
      productEditing,
    } = this.props;
    const { modalActionCreators } = this.props;
    const { hideModal } = modalActionCreators;
    const {
      name,
      description,
      information,
      category_id,
      producer_id,
      status_id,
      discount,
      amount,
      price,
    } = this.state;

    console.log(dataCategory);
    console.log(productEditing);
    console.log(dataProductstatus);

    return (
      <div>
        <div className="modal-body">
          <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <div className="form-group">
              <label className="col-form-label">photo: *</label>
              <input
                type="file"
                className="form-control"
                name="photo"
                onChange={(event) => this.isChangePhoto(event)}
              />
            </div>
            <div className="form-group">
              <label className="col-form-label">name: *</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={name || ""}
                onChange={(event) => this.isChange(event)}
              />
            </div>
            <div className="form-group">
              <label className="col-form-label">description: *</label>
              <input
                type="text"
                className="form-control"
                name="description"
                value={description || ""}
                onChange={(event) => this.isChange(event)}
              />
            </div>
            <div className="form-group">
              <label className="col-form-label">information: *</label>
              <input
                type="text"
                className="form-control"
                name="information"
                value={information || ""}
                onChange={(event) => this.isChange(event)}
              />
            </div>

            <div className="form-group">
              <label className="col-form-label">amount: *</label>
              <input
                type="text"
                className="form-control"
                name="amount"
                value={amount || ""}
                onChange={(event) => this.isChange(event)}
              />
            </div>


            <div className="form-group">
              <label className="col-form-label">price: *</label>
              <input
                type="text"
                className="form-control"
                name="price"
                value={price || ""}
                onChange={(event) => this.isChange(event)}
              />
            </div>

            <div className="form-group">
              <label className="col-form-label">discount: *</label>
              <input
                type="text"
                className="form-control"
                name="discount"
                value={discount || ""}
                onChange={(event) => this.isChange(event)}
              />
            </div>

            <div className="form-group">
              <label>category: *</label>
              <select
                className="form-control"
                name="category_id"
                value={category_id || ""}
                onChange={(event) => this.isChange(event)}
              >
                 <option>---</option>
                {dataCategory.map((value, key) => {
                  return (
                    <option key={key} value={value.id}>
                      {value.name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="form-group">
              <label>producer: *</label>
              <select
                className="form-control"
                name="producer_id"
                value={producer_id || ""}
                onChange={(event) => this.isChange(event)}
              >
                 <option>---</option>
                {dataProducer.map((value, key) => {
                  return (
                    <option key={key} value={value.id}>
                      {value.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-group">
              <label>status: *</label>
              <select
                className="form-control"
                name="status_id"
                value={status_id || ""}
                onChange={(event) => this.isChange(event)}
              >
                <option>---</option>
                {dataProductstatus.map((value, key) => {
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
    dataProducer: state.producer.listProducer,
    dataProductstatus: state.productstatus.listProductstatus,
    dataCategory: state.category.listSubCategory,
    productEditing: state.product.productEditing,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    modalActionCreators: bindActionCreators(modalActions, dispatch),
    producerActionCreators: bindActionCreators(producerActions, dispatch),
    productActionCreators: bindActionCreators(productActions, dispatch),
    productstatusActionCreators: bindActionCreators(
      productstatusActions,
      dispatch
    ),
    categoryActionCreators: bindActionCreators(categoryActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
