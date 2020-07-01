import React, { Component } from "react";
import * as modalActions from "./../../actions/modal";
import * as producerActions from "./../../actions/producer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class ProducerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
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
    const { producerEditing } = this.props;
    console.log(producerEditing);
    if (producerEditing) {
      this.setState({
        id: producerEditing.id,
        name: producerEditing.name,
      });
    }
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    const { id, name } = this.state;
    const { producerActionCreators } = this.props;
    const { addProducer, updateProducer } = producerActionCreators;
    console.log(id);
    if (id) {
      updateProducer(name);
    } else {
      addProducer(name);
    }
  };

  render() {
    const { page } = this.props;
    const { modalActionCreators } = this.props;
    const { hideModal } = modalActionCreators;
    const { name } = this.state;
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
                value={name || ""}
                onChange={(event) => this.isChange(event)}
              />
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
    producerEditing: state.producer.producerEditing,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    modalActionCreators: bindActionCreators(modalActions, dispatch),
    producerActionCreators: bindActionCreators(producerActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProducerForm);
