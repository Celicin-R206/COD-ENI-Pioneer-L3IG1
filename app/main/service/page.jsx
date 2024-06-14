/** @format */

import React from "react";
import "./style.css";
import { Search } from "lucide-react";

const Service = () => {
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
      <div className="bottom"></div>
    </div>
  );
};

export default Service;
