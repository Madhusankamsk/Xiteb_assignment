import React, { useEffect, useRef } from "react";
import "./Stats.css";

const Stats = () => {
  const statsRef = useRef(null);
  const counts = useRef([]);

  const animateCounts = () => {
    const startValues = [880, 120, 730, 590];
    const endValues = [890, 137, 740, 600];
    const duration = 2000; // Duration of the animation in milliseconds
    const intervalTime = 10; // Interval time in milliseconds

    endValues.forEach((endValue, index) => {
      let startValue = startValues[index];
      const step = (endValue - startValue) / (duration / intervalTime);
      const shadowElement = counts.current[index].querySelector(".shadow");

      const counter = setInterval(() => {
        startValue += step;
        if (startValue >= endValue) {
          startValue = endValue;
          clearInterval(counter);
        }
        shadowElement.innerText = Math.floor(startValue);
      }, intervalTime);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounts();
          observer.disconnect();
        }
      });
    });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
  }, []);

  return (
    <div className="stats-container" ref={statsRef}>
        
      <div class="tab-row">
        <div className="stat-item" ref={(el) => (counts.current[0] = el)}>
          <div className="shadow">880</div>
          <div className="content">
            <h2>890</h2>
            <h3>Delivered packages</h3>
          </div>
        </div>
        <div className="stat-item" ref={(el) => (counts.current[1] = el)}>
          <div className="shadow">120</div>
          <div className="content">
            <h2>137</h2>
            <h3>Countries covered</h3>
          </div>
        </div>
      </div>

      <div class="tab-row">
        <div className="stat-item" ref={(el) => (counts.current[2] = el)}>
          <div className="shadow">730</div>
          <div className="content">
            <h2>740</h2>
            <h3>Tons Goods</h3>
          </div>
        </div>
        <div className="stat-item" ref={(el) => (counts.current[3] = el)}>
          <div className="shadow">590</div>
          <div className="content">
            <h2>600</h2>
            <h3>Satisfied Clients</h3>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Stats;
