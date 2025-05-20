import React from 'react'
import './BannerAppartement.scss'

function BannerAppartement() {
  return <div className='BannerAppartement'>
    <div className='tel'>
        <img src={ `props.imageUrl`} alt="tel" />
    </div>
  </div>
  
}

export default BannerAppartement