// navbar component with back button and link to a custom page

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const NavBar = props => {
  const { title, searchPage } = props;
  return (
    <div className="navbar">
      <ul className="navbarWrapper">
        <li className="backLinkSVG">
          {searchPage ? (
            <a href="/bahmni/home/index.html#/dashboard">
              <p className="navbarText">{title}</p>
            </a>
          ) : (
            <NavLink to="/search">
              <p className="navbarText">{title}</p>
            </NavLink>
          )}
        </li>
        <li className="navbarIcon">
          <NavLink to="/new" className="navbarTextLink">
            <p className="navbarText">Register New Person </p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
