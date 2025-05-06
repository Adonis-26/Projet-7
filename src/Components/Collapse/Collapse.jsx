import React, { useState } from "react";
import "./Collapse.scss";

function Collapse({ titre, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        <p>{titre} Equipements </p>
        <span className={`arrow ${isOpen ? "open" : ""}`}>
        <i className={"fa-solid fa-chevron-up"}></i> 
        </span>
      </div>
      {isOpen && <div className="collapse-content">{children}
      </div>}
    </div>
  );
}

export default Collapse;
