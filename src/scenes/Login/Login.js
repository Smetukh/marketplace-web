import React from 'react';
import T from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { compose, withHandlers } from 'recompose';
import Api from '../../api';
import { routes } from '../router';
import s from './Login.module.scss';

function Login({ handleLogin }) {
    console.log('LOGIN')
    return (
        <div className={s.modal}>
            <button className={s.login} type="button" onClick={handleLogin}>
                Login
            </button>
            <Link to={routes.register}>Register</Link>
        </div>
    )
}

const enhancer = compose(
    withRouter,
    withHandlers({
        handleLogin: (props) => () => {
            Api.Auth.login();
            props.history.push(routes.home);
        },
    })
)

export default enhancer(Login);