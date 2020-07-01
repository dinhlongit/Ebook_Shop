import React, { Component } from "react";
import * as modalActions from "./../../actions/modal";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
var link = "http://nhom5.azurewebsites.net/public/upload/product/";

class OrderById extends Component {
  render() {
    const { data } = this.props;
    const { modalActionCreators } = this.props;
    const { hideModal } = modalActionCreators;
    console.log(data);
    return (
      <div>
        {/* <div className="modal-body">
          <div className="contaner">
            {data.map((index, key) => {
              return (
                <div key={key} className="row mb-2">
                  <div className="col-sm-3">
                  <img src={`${link}${index.photo}`} className="img-fluid" />
                  </div>
                  <div className="col-sm-9">
                    <small>name: {index.name}</small>
                    <br />
                    <small>amount: {index.pivot["amount"]}</small>
                    <br />
                    <small>price: {index.pivot["price"]}</small>
                    <br />   
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={hideModal}
          >
            Close
          </button>
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.order.listOrderById,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    modalActionCreators: bindActionCreators(modalActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderById);
