import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "./../../actions/user";
import UserItem from "../../components/UserItem";
import * as modalActions from "./../../actions/modal";
import UserForm from "../UserForm";

class User extends Component {
  componentDidMount() {
    const { userActionCreators } = this.props;
    const { fetchListUser } = userActionCreators;
    fetchListUser();
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
    changeModalTitle('Thêm mới user');
    changeModalContent(<UserForm/>);
  };

  showModalEditUser = (user) => {
    const { userActionCreators, modalActionCreators } = this.props;
    const { setUserEditing } = userActionCreators;
    setUserEditing(user);
    const {
      showModal,
      changeModalTitle,
      changeModalContent,
    } = modalActionCreators;
    showModal();
    changeModalTitle('Cập nhật user');
    changeModalContent(<UserForm />);
  }

  showModalDeleteUser = (user) => {
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
        <div className="modal-body"> Bạn chắc chắn muốn xóa {user.name}</div>
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
            onClick={() => this.handleDeleteUser(user)}
          >
            ĐỒNG Ý
          </button>
        </div>
      </div>
    );
  };

  handleDeleteUser(user) {
    const { id } = user;
    const { userActionCreators } = this.props;
    const { deleteUser } = userActionCreators;
    deleteUser(id);
  }

  renderUser = () => {
    const { data } = this.props;
    let xhtml = null;
    xhtml = data.map((user, index) => {
      return (
        <UserItem
          key={index}
          user={user}
          onClickDelete={this.showModalDeleteUser}
          onClickEdit={this.showModalEditUser}
        />
      );
    });
    return xhtml;
  };

  render() {
    return (
      <main>
        <div className="container-fluid">
          <h1 className="mt-2">Tables</h1>

          <ol className="breadcrumb mb-2">
            <li className="breadcrumb-item">
              <a href="index.html">Dashboard</a>
            </li>
            <li className="breadcrumb-item active">Tables</li>
          </ol>

          <div className="card mb-2" />
          <button type="button" className="btn btn-primary mb-2"  onClick={this.openForm}>
            <i className="fas fa-user-plus"></i>
          </button>
          <div className="card mb-2">
            <div className="card-header">
              <i className="fas fa-table mr-1" />
              DataTable Example
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>id</th>
                      <th>name</th>
                      <th>phone_number</th>
                      <th>email</th>
                      <th>address</th>
                      <th>profile_photo</th>
                      <th>birthday</th>
                      <th>address_id</th>
                      <th>role</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderUser()}</tbody>
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
    data: state.user.listUser,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    userActionCreators: bindActionCreators(userActions, dispatch),
    modalActionCreators: bindActionCreators(modalActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
