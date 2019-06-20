import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import Auth from './Auth/Auth';
import Inbox from './Inbox/Inbox';
import Policy from './Policy/Policy';
import Privacy from './Privacy/Privacy';
import Bookmarks from './Bookmarks/Bookmarks';
import Profile from './Profile/Profile';
import PrivateRoute from '../helpers/PrivateRoute';

export const routes = {
    home: '/',
    login: '/auth/login',
    register: '/auth/register',
    auth: '/auth',
    inbox: '/inbox',
    policy: '/policy',
    privacy: '/privacy',
    bookmarks: '/bookmarks',
    profile: '/profile',
}



export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={routes.home} component={Home}/>
                <PrivateRoute path={routes.inbox} component={Inbox}/>
                <Route path={routes.auth} component={Auth} />
                <Route path={routes.policy} component={Policy}/>
                <Route path={routes.privacy} component={Privacy}/>
                <PrivateRoute path={routes.bookmarks} component={Bookmarks}/>
                <PrivateRoute path={routes.profile} component={Profile}/>
                <Route component={NotFound}/>
            </Switch>
            
        </BrowserRouter>
    )
}