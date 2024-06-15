/** @format */

import Image from "next/image";
import React from "react";
import "./product.css";

const Product = () => {
  return (
    <div className="containers product">
      <div className="product-wrapper">
        <div className="left">
          <Image
            alt="product"
            src={"/assets/images/citoyen.svg"}
            width={40}
            height={50}
          />
          <span>01 / Citoyens</span>
        </div>
        <div className="middle">
          <span className="blue">. Service publique -</span>
          <h2>Légalité et Transparence</h2>
          <p>
            Administrations publiques fournissent documents officiels,
            garantissant légalité et transparence des processus gouvernementaux.
          </p>
          <button className="btn primary">
            {" "}
            <div>Commencer maintenant</div>{" "}
          </button>
        </div>
        <div className="right">
          <Image
            alt="product"
            src={"/assets/images/document.svg"}
            width={40}
            height={50}
          />
          <span>02 / Document</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
