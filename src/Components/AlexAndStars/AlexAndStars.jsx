import React from 'react'
import './AlexAndStars.scss'

function AlexAndStars() {
  return <div className='AlexAndStars'>
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
  
}

export default AlexAndStars