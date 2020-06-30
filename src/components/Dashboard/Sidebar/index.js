import React, { Component } from "react";
import { ADMIN_ROUTES } from "../../../constants";
import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  renderList() {
    let xhtml = null;
    xhtml = (
      <div>
        {ADMIN_ROUTES.map((item) => {
          return (
            <NavLink
              className="nav-link"
              key={item.path}
              to={item.path}
              exact={item.exact}
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-table" />
              </div>
              {item.name}
            </NavLink>
          );
        })}
      </div>
    );
    return xhtml;
  }

  render() {
    return (
      <div id="layoutSidenav_nav">
        <nav
          className="sb-sidenav accordion sb-sidenav-dark"
          id="sidenavAccordion"
        >
          <div className="sb-sidenav-menu">
            <div className="nav">{this.renderList()}</div>
          </div>
          <div className="sb-sidenav-footer">
            <div className="small">Logged in as:</div>
            Start Bootstrap
          </div>
        </nav>
      </div>
    );
  }
}

export default Sidebar;
