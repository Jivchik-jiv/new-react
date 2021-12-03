import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { selectIsAuth } from '../../../redux/auth/auth-selectors';
import routes from '../../../routes';


const PublicRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => (
    <Route
    {...routeProps}
    render={(props) =>
      isAuthenticated&&routeProps.restricted ? (
        <Redirect to={routes.personalContacts.contacts} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps=(state)=>({
  isAuthenticated: selectIsAuth(state),
})

export default connect(mapStateToProps)(PublicRoute);


// Видео на 69 минуте