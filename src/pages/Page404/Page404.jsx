import React from 'react'
import './Page404.scss';
import { NavLink } from "react-router-dom";

function Page404() {
  return <div className='page404'>
    <div className='chiffre'> 404</div>
    <div className='texte'>
    Oups! La page que <br/> vous demandez n'existe pas.
    </div>
    <NavLink to= "/">
    <div className='backAccueil'>
    Retourner sur la page d’accueil
    </div>
    </NavLink>
    </div>
}

export default Page404