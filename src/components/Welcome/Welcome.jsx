import React from 'react';
import './Welcome.css';
import warehouseWorker from '../../assets/fort2.jpg'; // Replace with actual path to the image

const Welcome = () => {
  return (
    <div className="container">
      <div className="left-section">
        <div className="image-container">
          <img src={warehouseWorker} alt="Warehouse Worker" className="worker-image" />
        </div>
        <div className="client-info">
          <h2>15,350 +</h2>
          <p>Clients Worldwide</p>
        </div>
      </div>
      <div className="right-section">
        <h1>
          TransMax Logistics <br /> Around <span className="highlight">the World</span>
        </h1>
        <p><b>
          Transmax is the world's driving worldwide coordinations supplier — we uphold industry
          and exchange the worldwide trade of merchandise through land transport.
          </b> </p>
        <p>
          Our worth added administrations guarantee the progression of products proceeds
          consistently and supply chains stay lean and streamlined for progress.
        </p>
        <button className="more-about-button">MORE ABOUT US</button>
      </div>
    </div>
  );
};

export default Welcome;
