import React from 'react'
import './Ville.scss'
import Apartement from '../ApartementGray/Apartement'

import PropTypes from 'prop-types'

function Ville() {

  return <div className='ville_flex'>
    <div className='ville'>
      <p>{Apartement.title}</p>
      <p className='region'>{Apartement.location}</p>
      <div className='bloc-rectangle'>
        <p className='rectangle'>Cozy</p>
        <p className='rectangle'>Canal</p>
        <p className='rectangle'>Paris 10</p>
      </div>

    </div>
  </div>
}

export default Ville