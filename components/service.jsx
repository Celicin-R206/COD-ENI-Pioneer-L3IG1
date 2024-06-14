/** @format */

import React from "react";

const Service = ({ data }) => {
  return (
    <div className="service-content">
      <div className="top">{data.nom}</div>
      <div className="bottom">
        <div className="left">
          <div>
            <span>Prix</span>
            <span>{data.prix} Ariary</span>
          </div>
        </div>
        <div className="right">
          <button>Proceder</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
