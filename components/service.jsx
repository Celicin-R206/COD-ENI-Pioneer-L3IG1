/** @format */
"use client"
import React from "react";
import { useRouter } from "next/navigation";

const Service = ({ data,livraison }) => {
  const router = useRouter()

  const navigation = (id)=>{
      router.push(`/main/service/${id}/livraison-mod`)
  }

  return (
    <div className="service-content">
      <div className="top">{data?.nom}</div>
      <div className="bottom">
        <div className="left">
          <div>
            <span>Prix</span>
            <span>{data?.prix} Ariary</span>
          </div>
        </div>
        <div className="right">
          {!livraison && <button onClick={()=>navigation(data?.id)}>Proceder</button>}
        </div>
      </div>
    </div>
  );
};

export default Service;
