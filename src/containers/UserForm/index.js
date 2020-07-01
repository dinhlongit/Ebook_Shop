import React, { Component } from "react";
import * as modalActions from "./../../actions/modal";
import * as roleActions from "./../../actions/role";
import * as userActions from "./../../actions/user";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:"",
      name: "",
      phone_number: "",
      email: "",
      birthday: "",
      password: "",
      address: "",
      address_id: "",
      roles: "",
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
    const { roleActionCreators } = this.props;
    const { fetchListRole } = roleActionCreators;
    fetchListRole();
  }

  componentWillReceiveProps(nextProps) {
    const { userEditing } = this.props;
    if(userEditing){
      this.setState({
        id:userEditing.id,
        name: userEditing.name,
        phone_number: userEditing.phone_number,
        email: userEditing.email,
        birthday: userEditing.birthday,
        password: userEditing.password,
        address: userEditing.address,
        address_id: userEditing.address_id,
        roles: userEditing.roles,
      });
    }
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    const {
      id,
      name,
      email,
      phone_number,
      birthday,
      password,
      address,
      address_id,
      roles,
    } = this.state;
    const { userActionCreators } = this.props;
    const { addUser, fetchListUser ,updateUser} = userActionCreators;
    console.log(id);
    if(id){
      updateUser(
        name,
        phone_number,
        email,
        birthday,
        password,
        address,
        address_id,
        roles
      );
     
    }else{
      addUser(
        name,
        phone_number,
        email,
        birthday,
        password,
        address,
        address_id,
        roles
      );
      fetchListUser();
    }
   
  };

  render() {
    const { data } = this.props;
    const { modalActionCreators } = this.props;
    const { hideModal } = modalActionCreators;
    const {
      name,
      phone_number,
      email,
      birthday,
      password,
      address,
      address_id,
      roles,
    } = this.state;
    return (
      <div>
        <div className="modal-body">
          <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">
                name:
              </label>
              <input
                type="text"
                className="form-control"
                id="recipient-name"
                name="name"
                value={name}
                onChange={(event) => this.isChange(event)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">
                phone_number:
              </label>
              <input
                type="text"
                className="form-control"
                id="recipient-name"
                name="phone_number"
                value={phone_number}
                onChange={(event) => this.isChange(event)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">
                email:
              </label>
              <input
                type="text"
                className="form-control"
                id="recipient-name"
                name="email"
                value={email}
                onChange={(event) => this.isChange(event)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">
                birthday:
              </label>
              <input
                type="text"
                className="form-control"
                id="recipient-name"
                name="birthday"
                value={birthday}
                onChange={(event) => this.isChange(event)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">
                password:
              </label>
              <input
                type="text"
                className="form-control"
                id="recipient-name"
                name="password"
                
                onChange={(event) => this.isChange(event)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">
                address:
              </label>
              <input
                type="text"
                className="form-control"
                id="recipient-name"
                name="address"
                value={address}
                onChange={(event) => this.isChange(event)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">
                address_id:
              </label>
              <input
                type="text"
                className="form-control"
                id="recipient-name"
                name="address_id"
                value={address_id}
                onChange={(event) => this.isChange(event)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">
                roles:
              </label>
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                name="roles"
                value={roles}
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
    data: state.role.listRole,
    userEditing: state.user.userEditing,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    modalActionCreators: bindActionCreators(modalActions, dispatch),
    roleActionCreators: bindActionCreators(roleActions, dispatch),
    userActionCreators: bindActionCreators(userActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
