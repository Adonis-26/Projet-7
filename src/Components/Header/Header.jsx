import React from 'react';
import "./Header.scss";

function Header() {
  return <nav className='header'>
    <img className='logo' src="/img/logo.png" alt="logo" />
      <div className='acceuil_and_a_propos'>
          <h4 className='accueil'>Accueil</h4>
          <div className='a_propos'>A propos</div> 
      </div>
    
   
  </nav>;
}

export default Header;