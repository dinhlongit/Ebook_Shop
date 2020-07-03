import React, { Component } from "react";
import { Provider } from "react-redux";
import { ADMIN_ROUTES, ROUTES } from "../../constants";
import {Switch, Router} from "react-router-dom";
import configureStore from "../../redux/configureStore";
import AdminLayoutRoute from "../../commons/Layout/AdminLayoutRoute";
import DefaultLayoutRoute from "../../commons/Layout/DefaultLayoutRoute";
import GlobalLoading from "../../components/GlobalLoading";
import history from "../../helpers/history";
import Modal from "../../components/Modal";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const store = configureStore();

class App extends Component {

  renderAdminRoutes() {
    let xhtml = null;
    xhtml = ADMIN_ROUTES.map((route) => {
      return (
        <AdminLayoutRoute
          key={route.path}
          path={route.path}
          component={route.component}
          exact={route.exact}
          name={route.name}
        />
      );
    });
    return xhtml;
  }

  renderDefaultRoutes() {
    let xhtml = null;
    xhtml = ROUTES.map((route) => {
      return (
        <DefaultLayoutRoute
          key={route.path}
          path={route.path}
          component={route.component}
          exact={route.exact}
          name={route.name}
        />
      );
    });
    return xhtml;
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
        <ToastContainer />
          <Modal/>
          {/* <GlobalLoading /> */}
          <Switch>
            {this.renderAdminRoutes()}
            {this.renderDefaultRoutes()}
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
