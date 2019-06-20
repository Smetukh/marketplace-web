import React from 'react';
import T from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

import s from './Auth.module.scss';
import { Header } from '../../components';
import { routes } from '../router';
import Login from '../Login/LoginContainer';
import Register from '../Register/Register';
import Api from '../../api';

function Auth() {
    return (
        <div className={s.container}>
            <Header />
            <Switch>
                {Api.Auth.isLoggedIn && <Redirect to={routes.home} />}
                <Route path={routes.login} component={Login} />
                <Route path={routes.register} component={Register} />
            </Switch>
        </div>
        
    )
}

export default Auth;