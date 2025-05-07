import React from 'react'
import './Apartement.scss'
import { NavLink } from "react-router-dom";

function Apartement(props) {
  console.log("props dans appartement",props)
  return <div className='apartement'>
    <NavLink to= "/apartement">
      <img src={props.imageApartement} alt="img_apartement" />
      <h5>{props.title}</h5>
    </NavLink>
    
  </div>
  
}

export default Apartement