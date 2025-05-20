
import './FicheLogement.scss';
import Collapse from '../../Components/Collapse/Collapse';
import BannerAppartement from '../../Components/BannerAppartement/BannerAppartement';
import { useParams } from 'react-router-dom';
import data from '../../../public/data.json';

function FicheLogement() {
  const { apartementId } = useParams(); // On récupère l'id de l'appartement depuis l'URL
  const apartement = data.find((apt) => apt.id === apartementId); // On cherche dans le fichier JSON
  console.log("apartement:", apartement);

  if (!apartement) {
    return <p>Appartement non trouvé.</p>; // Affiche un message si l'appartement n'existe pas
  }

  return (
    <div className='fichelogement'>
      <div className='BannerAppartement'>
          <img className='tel' src={apartement.cover} alt={apartement.cover} />
      </div>
      <div className='responsive'>
        <div className='ville_flex'>
          <div className='ville'>
            <p className='classTitle'>{apartement.title}</p>
            <p className='region'>{apartement.location}</p>
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
          <ul>
            {apartement.equipments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default FicheLogement;
