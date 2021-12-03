import React from 'react';
import { Redirect, Route } from 'react-router';
import routes from '../../../routes';


const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={routes.personalContacts.login} />
      )
    }
  />
);

export default PrivateRoute;
