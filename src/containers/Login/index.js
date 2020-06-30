import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionLoginCreators from "../../actions/login";
import { BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    const { actionLoginCreators } = this.props;
    const { login } = actionLoginCreators;



    login({email:this.state.email,password:this.state.password});


  };

  render() {
    // console.log(this.state.email);
    // console.log(this.state.password);

    return (
      <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
          <main>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-5">
                  <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-header">
                      <h3 className="text-center font-weight-light my-4">
                        Login
                      </h3>
                    </div>
                    <div className="card-body">
                      <form onSubmit={(event) => this.handleOnSubmit(event)}>
                        <div className="form-group">
                          <label
                            className="small mb-1"
                            htmlFor="inputEmailAddress"
                          >
                            Email
                          </label>
                          <input
                            className="form-control py-4"
                            id="inputEmailAddress"
                            type="email"
                            placeholder="Enter email address"
                            name="email"
                            onChange={(event) => this.isChange(event)}
                          />
                        </div>
                        <div className="form-group">
                          <label className="small mb-1" htmlFor="inputPassword">
                            Password
                          </label>
                          <input
                            className="form-control py-4"
                            id="inputPassword"
                            type="password"
                            placeholder="Enter password"
                            name="password"
                            onChange={(event) => this.isChange(event)}
                          />
                        </div>
                        {/* <div className="form-group">
                          <div className="custom-control custom-checkbox">
                            <input
                              className="custom-control-input"
                              id="rememberPasswordCheck"
                              type="checkbox"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="rememberPasswordCheck"
                            >
                              Remember password
                            </label>
                          </div>
                        </div> */}
                        <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                          <a className="small" href="password.html">
                    
                          </a>
                          {/* <a className="btn btn-primary">
                            Login
                          </a> */
                          }
                           <input type="submit" value="Submit" />
                        </div>
                      </form>
                    </div>
                    <div className="card-footer text-center">
                      <div className="small">
                      <Link to="/register">Need an account? Sign up!</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div id="layoutAuthentication_footer">
          <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid">
              <div className="d-flex align-items-center justify-content-between small">
                <div className="text-muted">Copyright © Your Website 2019</div>
                <div>
                  <a href="/#">Privacy Policy</a>·
                  <a href="/#">Terms &amp; Conditions</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actionLoginCreators: bindActionCreators(actionLoginCreators, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Login);
