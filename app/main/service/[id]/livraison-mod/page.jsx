/** @format */
"use client";
import React from "react";
import "../../style.css";
import Livraison from "@/components/service_pages/livraison";

const Service = () => {
  return (
    <div className="service">
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
          Organisez vos rendez-vous administratifs sans effort grâce à notre
          système de réservation en ligne, évitant ainsi les longues files
          d'attente et les délais d'attente prolongés.
        </p>
        <div className="content">
          <div className="top">
            <p>
              Voici la liste de tous les services que nous offrons pour
              faciliter vos démarches administratives
            </p>
            <div>
              <span>Pages</span>
              <div>
                <small>02 / 03</small>
                <div className="progress_container">
                  <div
                    className="progress"
                    style={{ width: `${100 / 2}%` }}></div>
                </div>
              </div>
            </div>
          </div>
          <Livraison />
        </div>
      </div>
    </div>
  );
};

export default Service;
