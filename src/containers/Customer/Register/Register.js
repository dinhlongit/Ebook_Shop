import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {register} from "../../../actions/user";
function Register(props) {
  const [name, setname] = useState('');
  const [phone_number, setphone_number] = useState('');
  const [address, setaddress] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [address_id, setaddress_id] = useState('');


   const dispatch = useDispatch();
  const submitHandler = (e) => {
      e.preventDefault();
      const user = { name, phone_number, address, email, password, address_id };
      console.log(user)
      dispatch(register(user));
  }


    return (
      <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
          <main>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-header">
                      <h3 className="text-center font-weight-light my-4">
                        Create Account
                      </h3>
                    </div>
                    <div className="card-body">
                     <form onSubmit={submitHandler} >
                        <div className="form-row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label
                                className="small mb-1"
                                htmlFor="inputFirstName"
                              >
                                Name
                              </label>
                              <input
                                className="form-control py-4"
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Enter name"
                                onChange={(e) => setname(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label
                                className="small mb-1"
                                htmlFor="inputLastName"
                              >
                                Phone Number
                              </label>
                              <input
                                className="form-control py-4"
                                id="phone_number"
                                name="phone_number"
                                type="text"
                                placeholder="Enter Phone Number"
                                onChange={(e) => setphone_number(e.target.value)}
                              />
                            </div>

                        

                          </div>
                        </div>

                        <div className="form-group">
                          <label
                            className="small mb-1"
                            htmlFor="inputEmailAddress"
                          >
                            Address
                          </label>
                          <input
                            className="form-control py-4"
                            id="address"
                            name="address"
                            type="text"
                            aria-describedby="emailHelp"
                            placeholder="Enter address"
                            onChange={(e) => setaddress(e.target.value)}

                          />
                        </div>


                        <div className="form-group">
                          <label
                            className="small mb-1"
                            htmlFor="inputEmailAddress"
                          >
                            Email
                          </label>
                          <input
                            className="form-control py-4"
                            id="email"
                            name="email"
                            type="email"
                            aria-describedby="emailHelp"
                            placeholder="Enter email "
                            onChange={(e) => setemail(e.target.value)}

                          />
                        </div>


                        <div className="form-row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label
                                className="small mb-1"
                                htmlFor="inputPassword"
                              >
                                Password
                              </label>
                              <input
                                className="form-control py-4"
                                id="inputPassword"
                                type="password"
                                placeholder="Enter password"
                               onChange={(e) => setpassword(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label
                                className="small mb-1"
                                htmlFor="inputConfirmPassword"
                              >
                                City
                              </label>
                              <select className="form-control" id="address_id" name="address_id"  onChange={(e) => setaddress_id(e.target.value)}>
                              <option value="1">Hue</option>
                              <option value="2">Da Nang</option>
                              <option value="3">Quang Tri</option>
                              <option value="4">Thua Thien Hue</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="form-group mt-4 mb-0">
                          <button
                            className="btn btn-primary btn-block"
                            type="submit"
                          >
                            Create Account

                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="card-footer text-center">
                      <div className="small">
                      <Link to="/login">Have an account? Go to login</Link>
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

export default Register;
