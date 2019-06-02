import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose, withHandlers } from 'recompose';
import classNames from 'classnames';
import s from './Header.module.scss';
import { routes } from '../../scenes/router';
import Api from '../../api';
import IconLogo from '../../atoms/IconLogo/IconLogo';
import IconHeart from '../../atoms/IconHeart/IconHeart';
import Login from '../../scenes/Login/Login';

function Header({ handleLogout }) {
	// const isLoggedIn = {...Api.Auth.isLoggedIn};
	// console.log('Api.Auth.isLoggedIn = ', Api.Auth.isLoggedIn)
	const cn = classNames({
		[s.header]: true,
		[s.light]: !Api.Auth.isLoggedIn
	});
	return (
  <header className={cn}>
		<div className={s.innerHeader}>
			<div className={s.left}>
				<Link to={routes.home}><IconLogo isLoggedIn={Api.Auth.isLoggedIn} /></Link>
			</div>
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
			
			<div className={s.profile}>
				{Api.Auth.isLoggedIn ? (<button className={s.logout} type="button" onClick={handleLogout}>TS</button>
							) : <Link className={s.login} to={routes.login}>Login</Link>}
								
			</div>
			<div
				className={s.heart}
			>
				<IconHeart isLoggedIn={Api.Auth.isLoggedIn} />
			</div>
		</div>
    
					
  </header>
	)
}
const enhancer = compose(
    withRouter,
    withHandlers({
        handleLogout: props => () => {
            Api.Auth.logout();
            props.history.push(routes.home);
        }
    })
)

export default enhancer(Header);