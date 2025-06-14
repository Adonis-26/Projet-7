import React from 'react';
import "./Header.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className='header'>
      <img className='logo' src="/img/logo.png" alt="logo" />
      <div className='acceuil_and_a_propos'>
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          end
        >
          <div className='accueil'>Accueil</div>
        </NavLink>

        <NavLink
          to="/a_propos"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          <div className='a_propos'>A propos</div>
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
