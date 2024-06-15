/** @format */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Confetti from "react-confetti";

const PayMode = () => {
  const [toggle, setToggle] = useState(1);
  const [payServ, setPayServ] = useState("Orange Money");
  const [showLoader, setShowLoader] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const toggleActive = (t) => {
    setToggle(t);
  };

  const validation = () => {
    setShowLoader(true);

    setTimeout(() => {
      setShowLoader(false);
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
      }, 6000); // Arrêter les confettis après 5 secondes
    }, 3000); // Afficher le loader pendant 3 secondes
  };

  const { innerWidth: width, innerHeight: height } = window;

  return (
    <div className="pay_mode">
      <div className="top">
        <h4>Mode de paiement</h4>
        <div>
          <div
            className={`pay-service ${toggle === 1 ? "active" : ""}`}
            onClick={() => {
              toggleActive(1);
              setPayServ("Orange Money");
            }}>
            <Image
              alt="pay_mode"
              src={"/assets/images/orange-money.svg"}
              width={60}
              height={60}
            />
            <div>
              <h4>Orange Money</h4>
              <small>Paiement sécurisé</small>
            </div>
          </div>
          <div
            className={`pay-service ${toggle === 2 ? "active" : ""}`}
            onClick={() => {
              toggleActive(2);
              setPayServ("Airtel Money");
            }}>
            <Image
              alt="pay_mode"
              src={"/assets/images/airtel-money.svg"}
              width={60}
              height={60}
            />
            <div>
              <h4>Airtel Money</h4>
              <small>Paiement sécurisé</small>
            </div>
          </div>
          <div
            className={`pay-service ${toggle === 3 ? "active" : ""}`}
            onClick={() => {
              toggleActive(3);
              setPayServ("M-Vola");
            }}>
            <Image
              alt="pay_mode"
              src={"/assets/images/mvola.svg"}
              width={60}
              height={60}
            />
            <div>
              <h4>M-Vola</h4>
              <small>Paiement sécurisé</small>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <h4>Vérifier les informations</h4>
          <div>
            <h6>Documents demandés</h6>
            <div>
              <small>Renouvellement de CIN</small>
              <span className="price">3000 AR</span>
            </div>
          </div>
          <div>
            <h6>Livraison</h6>
            <div>
              <small>Lot IB 4784/7884 Tanambao Zoara</small>
              <span className="price">2000 AR</span>
            </div>
          </div>
          <div>
            <div>
              <h6>Total</h6>
              <span className="price">5000 AR</span>
            </div>
          </div>
        </div>
        <div className="right">
          <h4>Passer au paiement</h4>
          <span>Téléphone</span>
          <div>
            <Image
              alt="Mada-flag"
              src={"/assets/images/flag.svg"}
              width={40}
              height={40}
            />
            <span>+261326603472</span>
          </div>
          {showLoader && (
            <button className="flex items-center gap-2">
              <svg
                viewBox="0 0 24 24"
                className="fill-[#f8ae06] w-[25px]"
                xmlns="http://www.w3.org/2000/svg">
                <style jsx>{`
                  .spinner {
                    transform-origin: center;
                    animation: spinner 1s infinite linear;
                  }
                  @keyframes spinner {
                    100% {
                      transform: rotate(360deg);
                    }
                  }
                  .circleAnimation {
                    animation: circleAnimation 2s
                      cubic-bezier(0.36, 0.6, 0.31, 1) infinite;
                  }
                  .circleAnimation1 {
                    animation-delay: -0.5s;
                  }
                  .circleAnimation2 {
                    animation-delay: -1s;
                  }
                  .circleAnimation3 {
                    animation-delay: -1.5s;
                  }
                  @keyframes circleAnimation {
                    0% {
                      r: 0;
                    }
                    25% {
                      r: 3px;
                      cx: 4px;
                    }
                    50% {
                      r: 3px;
                      cx: 12px;
                    }
                    75% {
                      r: 3px;
                      cx: 20px;
                    }
                    100% {
                      r: 0;
                      cx: 20px;
                    }
                  }
                `}</style>
                <circle className="circleAnimation" cx="4" cy="12" r="3" />
                <circle
                  className="circleAnimation circleAnimation1"
                  cx="4"
                  cy="12"
                  r="3"
                />
                <circle
                  className="circleAnimation circleAnimation2"
                  cx="4"
                  cy="12"
                  r="3"
                />
                <circle
                  className="circleAnimation circleAnimation3"
                  cx="4"
                  cy="12"
                  r="3"
                />
              </svg>
              chargement ...
            </button>
          )}
          {!showLoader && <button onClick={validation}>Valider</button>}
        </div>
      </div>
      {showConfetti && <Confetti width={width} height={height} />}
    </div>
  );
};

export default PayMode;
