import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import s from './Register.module.scss';
import { routes } from '../router';

function Register() {
    console.log('REGISTER')
    return (
        <div>
            <Link to={routes.login}>Login</Link>
        </div>
    )
}

export default Register;