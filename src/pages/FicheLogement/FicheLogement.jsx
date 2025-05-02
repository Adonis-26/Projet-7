import React from 'react'
import './FicheLogement.scss'
import Collapse1 from './Collapse1.jsx';
import Collapse2 from './Collapse2.jsx';

function FicheLogement() {
  return <div className='fichelogement'>
    <div className='tel'>
        <img src="./public/img/tel.png" alt="tel" />
    </div>
    <div className='carousel'>
        <img src="./public/img/carousel.png" alt="carousel" />
    </div>
        
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
    <div className='bloc'>
       <div className='stars'>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid gray fa-star"></i>
            <i className="fa-solid gray fa-star"></i>
        </div> 
        <div className='user'>
           <p>Alexandre <br/>Dumas</p> 
            <span className='cercle'></span>
        </div>
    </div>

    <Collapse1 />
    <Collapse2 />
    
</div>
}

export default FicheLogement