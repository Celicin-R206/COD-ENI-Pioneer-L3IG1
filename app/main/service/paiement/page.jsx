/** @format */

import React from "react";
import "../style.css";
import { Search } from "lucide-react";
import Services from "@/components/service_pages/services";
import Livraison from "@/components/service_pages/livraison";
import PayMode from "@/components/service_pages/pay-mode";

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
                  <small>03 / 03</small>
                  <div className="progress_container">
                    <div className="progress" style={{"width":`${100}%`}}></div>
                  </div>
                </div>
              </div>
            </div>
            <PayMode/>
         </div>
      </div>
    </div>
  );
};

export default Service;