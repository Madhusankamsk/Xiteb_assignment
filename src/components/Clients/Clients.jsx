import React from "react";
import "./Clients.css";
import logo1 from "../../assets/logo1.svg";
import logo2 from "../../assets/logo2.svg";
import logo3 from "../../assets/logo3.svg";
import logo4 from "../../assets/logo4.svg";
import logo5 from "../../assets/logo5.svg";

const Clients = () => {
  return (
    <div className="clients-container">

      <div class="client-row">
        <div className="client-item">
          <img src={logo1} alt="Reuss" />
        </div>
        <div className="client-item">
          <img src={logo2} alt="Genesis" />
        </div>
      </div>

      <div class="client-row2">
        <div className="client-item">
          <img src={logo3} alt="Integrio" />
        </div>
        <div className="client-item">
          <img src={logo4} alt="Brainbiz" />
        </div>
      </div>

      <div class="client-row3">
        <div className="client-item">
          <img src={logo5} alt="ZigZag" />
        </div>
      </div>

    </div>
  );
};

export default Clients;
