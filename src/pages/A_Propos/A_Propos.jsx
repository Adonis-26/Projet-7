import React, { useEffect, useState } from 'react'
import './A_Propos.scss'
import BannerAppartement from '../../Components/BannerAppartement/BannerAppartement'
import Collapse from '../../Components/Collapse/Collapse'


function A_Propos() {
  const [aproposData, setAproposData] = useState([]);

  useEffect(() => {
  fetch('/data.json')
    .then((response) => response.json())
    .then((data) => setAproposData(data))
    .catch((error) => console.erreor("error data:", error));
}, []);

  return <div className='A_Propos'>
    <div className='aproposBanner'>
        <BannerAppartement />
    </div>
    <div className='aproposCollapse'>
      {aproposData.map((item, index) => (
        <Collapse Key={index} title={item.title}>
          {item.content}
        </Collapse>
      ))}
    </div>
    
  </div>
  
}

export default A_Propos