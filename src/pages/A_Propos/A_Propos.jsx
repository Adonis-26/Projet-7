import React from 'react';
import "./A_Propos.scss";
import Collapse from '../../Components/Collapse/Collapse';
import Banner from '../../Components/Banner/Banner';


function A_Propos() {
  return (
    <div className="A_Propos">
      <div className='bannerApropos'>
        
      </div>
      <div className="aproposCollapse">
        <Collapse title="Fiabilité">
        <p>
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
        </p>
        </Collapse>

        <Collapse title="Respect">
        <p>
          La bienveillance fait partie des valeurs fondamentales de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
        </p>
        </Collapse>

        <Collapse title="Service">
        <p>
          Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
        </p>
        </Collapse>

        <Collapse title="Sécurité">
        <p>
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.
        </p>
        </Collapse>
      </div>
    </div>
  );
}

export default A_Propos;
