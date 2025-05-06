import React from 'react'
import './FicheLogement.scss'
import Collapse from '../../Components/Collapse/Collapse'
import Ville from '../../Components/Ville/Ville'
import AlexAndStars from '../../Components/AlexAndStars/AlexAndStars'
import BannerAppartement from '../../Components/BannerAppartement/BannerAppartement'

function FicheLogement() {
  return <div className='fichelogement'>
    <BannerAppartement />
  
    <div className='responsive'>
        <Ville />
        <AlexAndStars/>
    </div>
   
    <div className='collapse_flex'>
        <Collapse title="Description" />
        
        <Collapse title="Équipements" >
            <ul>
                <li>Climatisation</li>
                <li>Wi-Fi</li>
                <li>Cuisine</li>
                <li>Espace de travail</li>
                <li>Fer à repasser</li>
                <li>Sèche-cheveux</li>
                <li>Cintres</li>
            </ul>
        </Collapse>
    </div>
   
    
</div>
}

export default FicheLogement