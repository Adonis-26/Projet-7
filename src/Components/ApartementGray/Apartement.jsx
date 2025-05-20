import React from 'react'
import './Apartement.scss'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Apartement(props) {
  return (
  <div className='apartement'>
    <Link to={`/apartement/${props.id}`}>

      <img src={props.imageApartement} alt="img_apartement" />
      <h5>{props.title}</h5>
    </Link>
  </div>
  );
}

export default Apartement