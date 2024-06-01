import React from 'react';
import './Welcome.css';
import warehouseWorker from '../../assets/welcome.png'; // Replace with the actual path to the image
import rectangle from '../../assets/Rectangle.svg'; // Replace with the actual path to the SVG

const Welcome = () => {
  return (
    <div className="container">
      <div className="left-section">
        <div className="image-container">
          <img src={warehouseWorker} alt="Warehouse Worker" className="worker-image" />
        </div>
       
      </div>
      <div className="right-section">
        <div className="title-container">
          <img src={rectangle} alt="Background Shape" className="title-background" />
          <h1 className="title-text">
            TransMax Logistics<br/>Around <span className="highlight">the World</span>
          </h1>
        </div>
        <p><b>
          Transmax is the world's driving worldwide coordinations
          supplier — we uphold industry and exchange the worldwide
          trade of merchandise through land transport.
          </b> </p>
        <p>
          Our worth added administrations guarantee the progression of
          products proceeds consistently and supply chains stay lean and
          streamlined for progress.
        </p>
        <button className="more-about-button">MORE ABOUT US</button>
      </div>
    </div>
  );
};

export default Welcome;