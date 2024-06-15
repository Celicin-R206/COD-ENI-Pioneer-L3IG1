/** @format */

import React from "react";
import "../../style.css";
import { Search } from "lucide-react";
import Services from "@/components/service_pages/services";
import Livraison from "@/components/service_pages/livraison";
import PayMode from "@/components/service_pages/pay-mode";

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
              Bienvenue dans notre interface de paiement sécurisé. Veuillez
              suivre les étapes ci-dessous pour finaliser votre transaction.
            </p>
            <div>
              <span>Pages</span>
              <div>
                <small>03 / 03</small>
                <div className="progress_container">
                  <div className="progress" style={{ width: `${100}%` }}></div>
                </div>
              </div>
            </div>
          </div>
          <PayMode />
        </div>
      </div>
    </div>
  );
};

export default Service;
