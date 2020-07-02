import React, { Component } from "react";
import * as modalActions from "./../../actions/modal";
import * as orderstatusActions from "./../../actions/orderstatus";
import * as orderActions from "./../../actions/order";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      user_id: "",
      full_name: "",
      street: "",
      city: "",
      phone_number: "",
      name: "",
      total: "",
      orderstatus: "",
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
    const { orderstatusActionCreators } = this.props;
    const { fetchListOrderstatus } = orderstatusActionCreators;
    fetchListOrderstatus();
  }

  componentWillReceiveProps(nextProps) {
    const { orderEditing } = this.props;
    console.log(orderEditing);
    if (orderEditing) {
      this.setState({
        id: orderEditing.id,
        user_id: orderEditing.user_id,
        full_name: orderEditing.full_name,
        street: orderEditing.street,
        city: orderEditing.city,
        phone_number: orderEditing.phone_number,
        name: orderEditing.name,
        total: orderEditing.total,
        orderstatus: orderEditing.status,
      });
    }
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    const {
      id,
      user_id,
      full_name,
      street,
      city,
      phone_number,
      name,
      total,
      orderstatus,
    } = this.state;
    const { orderActionCreators } = this.props;
    const { addOrder, updateOrder } = orderActionCreators;
    console.log(orderstatus);
    if (id) {
      updateOrder(
        orderstatus
      );
    } else {
      addOrder(
        user_id,
        full_name,
        street,
        city,
        phone_number,
        name,
        total,
        orderstatus,
      );
    }
  };

  render() {
    const { data } = this.props;
    const { modalActionCreators } = this.props;
    const { hideModal } = modalActionCreators;
    const {
        user_id,
        full_name,
        street,
        city,
        phone_number,
        name,
        total,
        orderstatus,
    } = this.state;
    return (
      <div>
        <div className="modal-body">
          <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <div className="form-group">
              {/* <label htmlFor="recipient-name" className="col-form-label">
                user_id:
              </label> */}
              <input
                type="text"
                className="form-control"
                id="recipient-name"
                name="user_id"
                value={user_id || ''}
                onChange={(event) => this.isChange(event)}
                type="hidden"
              />
            </div>
            <div className="form-group">
              {/* <label htmlFor="recipient-name" className="col-form-label">
                full_name:
              </label> */}
              <input
                type="text"
                className="form-control"
                id="recipient-name"
                name="full_name"
                value={full_name || ''}
                onChange={(event) => this.isChange(event)}
                readOnly
                type="hidden"
              />
            </div>
            <div className="form-group">
              {/* <label htmlFor="recipient-name" className="col-form-label">
                street:
              </label> */}
              <input
                type="text"
                className="form-control"
                id="recipient-name"
                name="street"
                value={street || ''}
                onChange={(event) => this.isChange(event)}
                readOnly
                type="hidden"
              />
            </div>
            <div className="form-group">
              {/* <label htmlFor="recipient-name" className="col-form-label">
                city:
              </label> */}
              <input
                type="text"
                className="form-control"
                id="recipient-name"
                name="city"
                value={city || ''}
                onChange={(event) => this.isChange(event)}
                readOnly
                type="hidden"
              />
            </div>
            <div className="form-group">
              {/* <label htmlFor="recipient-name" className="col-form-label">
                phone_number:
              </label> */}
              <input
                type="text"
                className="form-control"
                id="recipient-name"
                name="phone_number"
                value={phone_number || ''}
                onChange={(event) => this.isChange(event)}
                readOnly
                type="hidden"
              />
            </div>
            <div className="form-group">
              {/* <label htmlFor="recipient-name" className="col-form-label">
                name:
              </label> */}
              <input
                type="text"
                className="form-control"
                id="recipient-name"
                name="name"
                value={name || ''}
                onChange={(event) => this.isChange(event)}
                readOnly
                type="hidden"
              />
            </div>
            <div className="form-group">
              {/* <label htmlFor="recipient-name" className="col-form-label">
                total:
              </label> */}
              <input
                type="text"
                className="form-control"
                id="recipient-name"
                name="total"
                value={total || ''}
                onChange={(event) => this.isChange(event)}
                readOnly
                type="hidden"
              />
            </div>
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">
                Status: *
              </label>
              <select
                className="form-control"
                name="orderstatus"
                value={orderstatus || ''}
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
    data: state.orderstatus.listOrderstatus,
    orderEditing: state.order.orderEditing,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    modalActionCreators: bindActionCreators(modalActions, dispatch),
    orderstatusActionCreators: bindActionCreators(orderstatusActions, dispatch),
    orderActionCreators: bindActionCreators(orderActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
