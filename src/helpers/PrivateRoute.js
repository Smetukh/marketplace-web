import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Api from '../api';
import { routes } from '../scenes/router';


function PrivateRoute({ component: Component, ...rest }) {
    console.log('aaa ', rest)
    return (
        <Route
            {...rest}
            render={props =>
                Api.Auth.isLoggedIn ? (
                <Component {...props} />
            ) : (
                <Redirect to={routes.login} />
            )
            }
        />
    );
}
  
export default PrivateRoute;