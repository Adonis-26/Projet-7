import React from 'react';
import './FicheLogement.scss';
import Collapse from '../../Components/Collapse/Collapse';
import { useParams } from 'react-router-dom';
import data from '../../../public/data.json';
import Caroussel from '../../Components/caroussel/caroussel';

function FicheLogement() {
  const { apartementId } = useParams(); 
  const apartement = data.find((apt) => apt.id === apartementId);

  if (!apartement) {
    return <p>Appartement non trouvé.</p>;
  }

  return ( 
    <div className='fichelogement'>
      
      <Caroussel images={apartement.pictures}/>
      <div className='responsive'>
        <div className='ville_flex'>
          <div className='ville'>
            <p className='classTitle'>{apartement.title}</p>
            <p className='subClassTitle'>{apartement.location}</p>
            <div className='bloc-rectangle' >
              {apartement.tags.map((item, index) => (
                <p className='rectangle' key={index}>{item}</p>
              ))}
            </div>
          </div>
        </div>
        <div className='containerUserStars'>
          <div className='stars'>
            {[...Array(5)].map((_, index) => (
              <i
                key={index}
                className={`fa-star ${index < parseInt(apartement.rating) ? "fa-solid" : "fa-regular"}`}
              ></i>
            ))}
          </div>
          <div className='user'>
            <p className='rectangle'>{apartement.host.name}</p>
            <img className='cercle' src={apartement.host.picture} alt={apartement.host.name} />
          </div>

        </div>
      </div>
      <div className='collapse_flex'>
        <Collapse title="Description">{apartement.description}</Collapse>
        <Collapse title="Équipements">
          <>
            {apartement.equipments.map((item, index) => (
              <ul key={index}>
                <li>
                  {item}
                </li>
               </ul>
            ))}
          </>
        </Collapse>
      </div>
    </div>
  );
}

export default FicheLogement;
