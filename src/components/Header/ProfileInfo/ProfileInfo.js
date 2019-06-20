import React from 'react';
import s from './ProfileInfo.module.scss';
import { Link, withRouter } from 'react-router-dom';
import { compose, withHandlers } from 'recompose';
import { routes } from '../../../scenes/router';
import Api from '../../../api';



const ProfileInfo = ({handleLogout}) => (
    <button className={s.logout} type="button" onClick={handleLogout}>TS</button>
);
const enhancer = compose(
    withRouter,
    withHandlers({
        handleLogout: props => () => {
            Api.Auth.logout();
            props.history.push(routes.home);
        }
    })
)
export default enhancer(ProfileInfo);