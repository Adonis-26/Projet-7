import React, { useEffect, useState} from 'react'
import './FicheLogement.scss'
import Collapse from '../../Components/Collapse/Collapse'
import Ville from '../../Components/Ville/Ville'
import AlexAndStars from '../../Components/AlexAndStars/AlexAndStars'
import BannerAppartement from '../../Components/BannerAppartement/BannerAppartement'
import { useLocation } from 'react-router-dom';

function FicheLogement() {
    const location = useLocation();
    console.log("location:", location);
    console.log("our apartement id is: ", location.state.apartementId)

    const [selectApartement, setSelectApartment] = useState(null);

    useEffect(() => {
        fetchApartementData();
     }, []);

    function fetchApartementData (){
      fetch("data.json")
      .then((response) => response.json())
      .then((apartements) => {
        const apartement = apartements.find((apt) => apt.id === location.state.apartementId);
        setSelectApartment(apartement);
    })
      .catch((error) => console.error('Erreur :', error))
    }
  return <div className='fichelogement'>
    select apartement: {JSON.stringify(selectApartement)};
    {selectApartement && (
      <BannerAppartement imageUrl={selectApartement.cover} />
    )}
  
  {selectApartement ? ( // le ? est une condition if /esle
  <div className='responsive'>
    <Ville apartement={selectApartement} />
    <AlexAndStars apartement={selectApartement} />
  </div>
) : (
  <p>Chargement des données...</p>
)}
   
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