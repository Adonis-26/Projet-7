import React, { useState } from "react";
import "./Collapse.scss";

function Collapse2({ titre, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        <p>{titre} Équipements</p>
        <span className={`arrow ${isOpen ? "open" : ""}`}>
        <i className={"fa-solid fa-chevron-up"}></i> 
        </span>
      </div>
      {isOpen && <div className="collapse-content">{children}
      <ul>
        <li>Climatisation</li>
        <li>Wi-Fi</li>
        <li>Cuisine</li>
        <li>Espace de travail</li>
        <li>Fer à repasser</li>
        <li>Sèche-cheveux</li>
        <li>Cintres</li>
      </ul></div>}
    </div>
  );
}

export default Collapse2;
