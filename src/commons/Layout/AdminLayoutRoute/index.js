import React, { Component } from 'react';
import Dashboard from './../../../components/Dashboard';
import { Route } from 'react-router-dom';


class AdminLayoutRoute extends Component {
  render() {
    const { component: YourComponent, ...remainProps } = this.props;
    return (
      <Route
        {...remainProps}
        render={routeProps => {
          return (
            <Dashboard {...remainProps}>
              <YourComponent {...routeProps} />
            </Dashboard>
          );
        }}
      />
    );
  }
}

export default AdminLayoutRoute;