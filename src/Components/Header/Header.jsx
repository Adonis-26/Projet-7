import React from 'react';
import "./Header.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return <nav className='header'>
    <img className='logo' src="/img/logo.png" alt="logo" />
      <div className='acceuil_and_a_propos'>
        <NavLink to= "/">
          <div classNames='accueil'>Accueil</div>
          </NavLink>
          <NavLink to= "/a_propos">
            <div className='a_propos'>A propos</div>
          </NavLink>
      </div>
    
   
  </nav>;
}

export default Header;