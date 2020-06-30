import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as roleActions from "./../../actions/role";
import * as modalActions from "./../../actions/modal";
import RoleItem from "../../components/RoleItem";

class Role extends Component {
  componentDidMount() {
    const { roleActionCreators } = this.props;
    const { fetchListRole } = roleActionCreators;
    fetchListRole();
  }

  showModalDeleteRole = (role) => {
    const { modalActionCreators } = this.props;
    const {
      showModal,
      hideModal,
      changeModalTitle,
      changeModalContent,
    } = modalActionCreators;
    showModal();
    changeModalTitle("Xóa role");
    changeModalContent(
      <div>
        <div className="modal-body"> Bạn chắc chắn muốn xóa {role.name}</div>
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
            onClick={() => this.handleDeleteRole(role)}
          >
            ĐỒNG Ý
          </button>
        </div>
      </div>
    );
  };

  handleDeleteRole(role) {
    const { id } = role;
    const { roleActionCreators } = this.props;
    const { deleteRole } = roleActionCreators;
    deleteRole(id);
  }

  renderRole = () => {
    const { data } = this.props;
    let xhtml = null;
    xhtml = data.map((role, index) => {
      return (
        <RoleItem
          key={index}
          role={role}
          onClickDelete={this.showModalDeleteRole}
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
    data: state.role.listRole,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    roleActionCreators: bindActionCreators(roleActions, dispatch),
    modalActionCreators: bindActionCreators(modalActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Role);
