import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose, withHandlers } from 'recompose';
import classNames from 'classnames';
import s from './Header.module.scss';
import { routes } from '../../scenes/router';
import Api from '../../api';
import IconLogo from '../../atoms/IconLogo/IconLogo';
import IconHeart from '../../atoms/IconHeart/IconHeart';
import Login from '../../scenes/Login/LoginView';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Search from './Search/Search';

function Header({  }) {
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
			<Search />
			
			<div className={s.profile}>
				{Api.Auth.isLoggedIn ? 
				// (<button className={s.logout} type="button" onClick={handleLogout}>TS</button>) 
				<ProfileInfo />
				: <Link className={s.login} to={routes.login}>Login</Link>}
								
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
    // withHandlers({
    //     handleLogout: props => () => {
    //         Api.Auth.logout();
    //         props.history.push(routes.home);
    //     }
    // })
)

export default enhancer(Header);