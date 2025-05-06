import React from 'react'
import './A_Propos.scss'
import BannerAppartement from '../../Components/BannerAppartement/BannerAppartement'
import Collapse from '../../Components/Collapse/Collapse'


function A_Propos() {
  return <div className='A_Propos'>
    <div className='aproposBanner'>
        <BannerAppartement />
    </div>
    <div className='aproposCollapse'>
        <Collapse />
        <Collapse />
        <Collapse />
        <Collapse />
    </div>
    
  </div>
  
}

export default A_Propos