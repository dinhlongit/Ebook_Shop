import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as modalActions from "./../../actions/modal";

class Modal extends Component {
  renderModal() {
    const { open, component, modalActionCreators, title } = this.props;
    const { hideModal } = modalActionCreators;
    let xhtml = null;
    if (open) {
      return (xhtml = (
        <div className="modal fade show" style={{display: 'block'}}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{title}</h5>
                <button type="button" className="close" onClick={hideModal}>
                  <span>×</span>
                </button>
              </div>
              <div>{component}</div>
            </div>
          </div>
        </div>
      ));
    } else {
      return (xhtml = (
        <div className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{title}</h5>
                <button type="button" className="close" onClick={hideModal}>
                  <span>×</span>
                </button>
              </div>
              <div>{component}</div>
            </div>
          </div>
        </div>
      ));
    }
  }

  render() {
    return <div>{this.renderModal()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    open: state.modal.showModal,
    component: state.modal.component,
    title: state.modal.title,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    modalActionCreators: bindActionCreators(modalActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
