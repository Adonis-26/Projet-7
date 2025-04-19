import React from 'react';
import "./Header.scss";

function Header() {
  return <nav className='header'>
    <div className='header_logo'>
    <img src="/img/logo.png" alt="logo" />
    </div>
    <div className='acceuil_and_a_propos'>
        <div className='accueil'>Accueil</div>
        <div className='a_propos'>A propos</div> 
    </div>
   
  </nav>;
}

export default Header;