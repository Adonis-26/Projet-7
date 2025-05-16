import React from 'react'
import './Ville.scss'

function Ville(props) {
  console.log("props ville:", props)
  return <div className='ville_flex'>
        <div className='ville'>
        {props.title}
            <div className='region'>
               Paris,île-de-France
            </div>
    </div>
    <div className='bloc-rectangle'>
        <div className='rectangle'>
           <p>Cozy</p>
        </div>
        <div className='rectangle'>
            <p>Canal</p>
        </div>
        <div className='rectangle'>
          <p>Paris 10</p> 
        </div>
    </div>
    </div>
}

export default Ville