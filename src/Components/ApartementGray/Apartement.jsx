import React from 'react'
import './Apartement.scss'
import { Link } from 'react-router-dom';

function Apartement(props) {
  return (
  <div className='apartement'>
    <Link to= "/apartement" state={{
    apartementId: props.id
    }}>

      <img src={props.imageApartement} alt="img_apartement" />
      <h5>{props.title}</h5>
    </Link>
  </div>
  );
}

export default Apartement