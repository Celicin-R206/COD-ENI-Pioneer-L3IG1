/** @format */

import React from "react";
import Service from "../service";
import axios from "axios";

const Services = async () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const services = await axios.get(API_URL + "/services");
  console.log(services.data);
  return (
    <div className="services-contents">
      {services?.data.map((value, index) => {
        return <Service data={value} key={index} />;
      })}
    </div>
  );
};

export default Services;
