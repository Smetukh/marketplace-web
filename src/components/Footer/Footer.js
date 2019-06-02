import React from 'react';
import s from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { routes } from '../../scenes/router';


const Footer = () => (
  <footer className={s.footer}>
    <div className={s.content}>
      <p>Copyright © 2019. 
				<Link className={s.privacy} to={routes.privacy}> Privacy </Link> 
				<Link className={s.policy} to={routes.policy}>Policy </Link> 
				</p>
    </div>
  </footer>
);

export default Footer;