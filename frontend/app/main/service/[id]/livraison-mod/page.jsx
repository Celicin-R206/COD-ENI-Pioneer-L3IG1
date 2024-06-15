/** @format */
"use client"
import React from "react";
import "../../style.css";
import Livraison from "@/components/service_pages/livraison";

const Service = () => {
  return (
    <div className="service">
      <div className="bottom page_content">
          <h1><div className="page_name"><div><span>Service</span></div></div> CitizenConnect</h1>
          <p>Lorem ipsum dolor sit amet consectetur. In blandit nec pharetra lorem nulla consectetur enim maecenas mauris. Aliquam</p>
         <div className="content">
            <div className="top">
              <p>Super hero cyber polar bear, 3Drender style, HQ, ultra-realisticSuper hero cyber polar bear, 3D render style, HQ,</p>
              <div>
                <span>Pages</span>
                <div>
                  <small>02 / 03</small>
                  <div className="progress_container">
                    <div className="progress" style={{"width":`${100/2}%`}}></div>
                  </div>
                </div>
              </div>
            </div>
            <Livraison/>
         </div>
      </div>
    </div>
  );
};

export default Service;
