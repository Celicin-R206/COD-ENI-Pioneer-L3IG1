/** @format */

import React from "react";
import "./style.css";
import { Search } from "lucide-react";
import Services from "@/components/service_pages/services";
import Livraison from "@/components/service_pages/livraison";
import PayMode from "@/components/service_pages/pay-mode";

const Service = async () => {
  return (
    <div className="service">
      <div className="top">
        <span>
          <input type="text" name="search" id="search" />
          <div className="flex items-center gap-2 pl-2 pr-2">
            {" "}
            <Search />
          </div>
        </span>
        <span>
          <div>
            <select name="short" id="short">
              <option value="1">Copie</option>
              <option value="1">CIN</option>
              <option value="1">Copie</option>
              <option value="1">Copie</option>
            </select>
          </div>
        </span>
      </div>
      <div className="bottom page_content">
        <h1>
          <div className="page_name">
            <div>
              <span>Service</span>
            </div>
          </div>{" "}
          CitizenConnect
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. In blandit nec pharetra lorem
          nulla consectetur enim maecenas mauris. Aliquam
        </p>
        <div className="content">
          <div className="top">
            <p>
              Super hero cyber polar bear, 3Drender style, HQ,
              ultra-realisticSuper hero cyber polar bear, 3D render style, HQ,
            </p>
            <div>
              <span>Pages</span>
              <div>
                <small>01 / 03</small>
                <div className="progress_container">
                  <div
                    className="progress"
                    style={{ width: `${100 / 3}%` }}></div>
                </div>
              </div>
            </div>
          </div>
          <Services />
        </div>
      </div>
    </div>
  );
};

export default Service;
