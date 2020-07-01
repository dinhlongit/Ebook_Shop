import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as producerActions from "./../../actions/producer";
import * as modalActions from "./../../actions/modal";
import ProducerItem from "../../components/ProducerItem";
import ProducerForm from "../ProducerForm";

class Role extends Component {
  componentDidMount() {
    const { producerActionCreators } = this.props;
    const { fetchListProducer } = producerActionCreators;
    fetchListProducer();
  }


  openForm = () => {
    const { modalActionCreators, userActionCreators } = this.props;
    //const { setTaskEditing } = userActionCreators;
    // setTaskEditing(null);
    const {
      showModal,
      changeModalTitle,
      changeModalContent,
    } = modalActionCreators;
    showModal();
    changeModalTitle("Thêm mới producer");
    changeModalContent(<ProducerForm />);
  };


  showModalDeleteProducer = (producer) => {
    const { modalActionCreators } = this.props;
    const {
      showModal,
      hideModal,
      changeModalTitle,
      changeModalContent,
    } = modalActionCreators;
    showModal();
    changeModalTitle("Xóa producer");
    changeModalContent(
      <div>
        <div className="modal-body"> Bạn chắc chắn muốn xóa {producer.name}</div>
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
            onClick={() => this.handleDeleteProducer(producer)}
          >
            ĐỒNG Ý
          </button>
        </div>
      </div>
    );
  };
  
  showModalEditProducer = (producer) => {
    console.log(producer);
    const { producerActionCreators, modalActionCreators } = this.props;
    const { setProducerEditing } = producerActionCreators;
    setProducerEditing(producer);
    const {
      showModal,
      changeModalTitle,
      changeModalContent,
    } = modalActionCreators;
    showModal();
    changeModalTitle("Cập nhật producer");
    changeModalContent(<ProducerForm />);
  };


  handleDeleteProducer(producer) {
    const { id } = producer;
    const { producerActionCreators } = this.props;
    const { deleteProducer } = producerActionCreators;
    deleteProducer(id);
  }

  renderRole = () => {
    const { data } = this.props;
    let xhtml = null;
    xhtml = data.map((producer, index) => {
      return (
        <ProducerItem
          key={index}
          producer={producer}
          onClickDelete={this.showModalDeleteProducer}
          onClickEdit={this.showModalEditProducer}

        />
      );
    });
    return xhtml;
  };

  render() {
    const { data } = this.props;
    console.log(data);

    return (
      <main>
        <div className="container-fluid">
          <h1 className="mt-4">Product</h1>
          <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item">
              <a href="index.html">Admin</a>
            </li>
            <li className="breadcrumb-item active">Product</li>
          </ol>
          <div className="card mb-2" />
          <button
            type="button"
            className="btn btn-primary mb-2"
            onClick={this.openForm}
          >
            <i className="fas fa-user-plus"></i>
          </button>
          <div className="card mb-4">
            <div className="card-header">
              <i className="fas fa-table mr-1" />
              DataTable Product
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table
                  className="table table-bordered"
                  width="100%"
                  cellSpacing={0}
                >
                  <thead>
                    <tr>
                      <th>id</th>
                      <th>name</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>{this.renderRole()}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.producer.listProducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    producerActionCreators: bindActionCreators(producerActions, dispatch),
    modalActionCreators: bindActionCreators(modalActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Role);
