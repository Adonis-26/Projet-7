import React from 'react'
import './FicheLogement.scss'
import Collapse from '../../Components/Collapse/Collapse'
import Ville from '../../Components/Ville/Ville'
import AlexAndStars from '../../Components/AlexAndStars/AlexAndStars'

function FicheLogement() {
  return <div className='fichelogement'>
    <div className='tel'>
        <img src="./public/img/tel.png" alt="tel" />
    </div>
    <div className='carousel'>
        <img src="./public/img/carousel.png" alt="carousel" />
    </div>
    <Ville />
    <AlexAndStars/>
    <Collapse 
        title="Description" 
        content="Ce logement est situé en plein cœur de la ville, avec une vue imprenable." 
      />

      <Collapse 
        title="Équipements" 
        content="
        <ul>
        <li>Climatisation</li>
        <li>Wi-Fi</li>
        <li>Cuisine</li>
        <li>Espace de travail</li>
        <li>Fer à repasser</li>
        <li>Sèche-cheveux</li>
        <li>Cintres</li>
      </ul>
        " 
      />
    
</div>
}

export default FicheLogement