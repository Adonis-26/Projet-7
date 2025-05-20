import React, { useState } from "react";
import "./Collapse.scss";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        <p>{title} </p>
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
