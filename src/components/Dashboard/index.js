import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

class Dashboard extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
       <Header/>
       <div id="layoutSidenav">
        <Sidebar/>
        <div id="layoutSidenav_content">
          {children}
        <Footer/>
        </div>
       </div>
      </div>
    );
  }
}

export default Dashboard;
