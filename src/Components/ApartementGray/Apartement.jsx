import React from 'react'
import './Apartement.scss'
import { NavLink } from "react-router-dom";

function Apartement() {
  return <div className='apartement'>
    <NavLink to= "/apartement">
      <h5>Titre de la <br/>location</h5>
    </NavLink>
    
  </div>
  
}

export default Apartement