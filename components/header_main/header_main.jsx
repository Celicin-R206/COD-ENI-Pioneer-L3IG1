/** @format */

import React from "react";
import Image from "next/image";
import "./style.css";

const Header_main = () => {
  return (
    <div className="header_main">
      <div className="left">
        <div className="logo">
          <Image
            src={"/assets/images/logo.svg"}
            width={100}
            height={100}
            alt="logo"
          />
        </div>
        <div className="title flex items-center gap-2">
          <Image
            src={"/assets/images/title_.svg"}
            width={100}
            height={100}
            alt="title_"
          />
          <p>GOUVERNANCE</p>
        </div>
      </div>
      <div className="center">
        <ul>
          <a href="#">Service</a>
          <a href="#">Map</a>
          <a href="#">BLog</a>
        </ul>
        <div className="money_">
          <div>3000.00 Ar</div>
        </div>
      </div>
      <div className="right">
        <div className="l">
          <p>RAHANDRIMIRAY</p>
          <p>Celicin</p>
        </div>
        <div className="r relative">
          <Image
            src={"/assets/images/user.svg"}
            width={60}
            height={60}
            alt="users"
          />
          <Image
            src={"/assets/images/seeting.svg"}
            width={50}
            height={60}
            alt="seeting"
            className="absolute top-0 right-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Header_main;
