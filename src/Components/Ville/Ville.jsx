import React from 'react'
import './Ville.scss'

function Ville() {
  return <div>
        <div className='ville'>
        Paris center, on the romantic <br/> Canal Saint-Martin
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