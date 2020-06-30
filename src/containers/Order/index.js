import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as orderActions from "./../../actions/order";
import * as modalActions from "./../../actions/modal";
import OrderItem from "../../components/OrderItem";

class Order extends Component {
  componentDidMount() {
    const { orderActionCreators } = this.props;
    const { fetchListOrder } = orderActionCreators;
    fetchListOrder();
  }

  showModalDeleteOrder = (order) => {
    const { modalActionCreators } = this.props;
    const {
      showModal,
      hideModal,
      changeModalTitle,
      changeModalContent,
    } = modalActionCreators;
    showModal();
    changeModalTitle("Xóa order");
    changeModalContent(
      <div>
        <div className="modal-body"> Bạn chắc chắn muốn xóa {order.name}</div>
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
            onClick={() => this.handleDeleteOrder(order)}
          >
            ĐỒNG Ý
          </button>
        </div>
      </div>
    );
  };

  handleDeleteOrder(order) {
    const { id } = order;
    const { orderActionCreators } = this.props;
    const { deleteOrder } = orderActionCreators;
    deleteOrder(id);
  }

  renderOrder = () => {
    const { data } = this.props;
    let xhtml = null;
    xhtml = data.map((order, index) => {
      return (
        <OrderItem
          key={index}
          order={order}
          onClickDelete={this.showModalDeleteOrder}
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
                      <th>user_id</th>
                      <th>full_name</th>
                      <th>street</th>
                      <th>city</th>
                      <th>phone_number</th>
                      <th>name</th>
                      <th>total</th>
                      <th>status</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>{this.renderOrder()}</tbody>
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
    data: state.order.listOrder,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    orderActionCreators: bindActionCreators(orderActions, dispatch),
    modalActionCreators: bindActionCreators(modalActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);