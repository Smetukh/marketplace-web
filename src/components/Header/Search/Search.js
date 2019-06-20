import React from 'react';
import s from './Search.module.scss';
import { Link, withRouter } from 'react-router-dom';
import { compose, withHandlers } from 'recompose';
import { routes } from '../../../scenes/router';
import Api from '../../../api';



const Search = () => (
    <div className={s.searchBox}>
        <button type="button" className={s.sell}>Sell</button>
        {Api.Auth.isLoggedIn && <div className={s.inputBox}>
        <input className={s.search} type="text" id="search" name="search" 
            placeholder="Search products by name" 
        />
        <input className={s.location} type="text" id="location" name="location"
            placeholder="Location"
        />
            <button type="button" className={s.searchSubmit}>Search</button>
        </div>}
    </div>
);
const enhancer = compose(
    
)
export default enhancer(Search);