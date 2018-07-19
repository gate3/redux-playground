import React from 'react';
import {NavLink} from 'react-router-dom';

const SideNav = () => (
    <nav>
          <div className="logo nav__logo">
            <NavLink to="/"><img src="assets/images/logo.svg" alt="logo"/></NavLink>
          </div>
          <ul className="nav__list">
            <li className="nav__item">
                <a >Episodes</a>
            </li>
          </ul>
          <ul className="nav__social">
            <li>
                <a className="nav_social__item">
                    <i className="fab fa-google-play"></i>
                </a>
            </li>
            <li>
                <a className="nav_social__item">
                    <i className="fab fa-itunes-note"></i>
                </a>
            </li>
            <li>
                <a className="nav_social__item">
                    <i className="fas fa-rss-square"></i>
                </a>
            </li>
          </ul>
    </nav>
);

export default SideNav;
