import React from 'react';
import './Stats.css';

const Stats = () => {
    return (
        <div className="stats-container">
            <div className="stat-item">
                <h2>890</h2>
                <p>Delivered packages</p>
            </div>
            <div className="stat-item">
                <h2>137</h2>
                <p>Countries covered</p>
            </div>
            <div className="stat-item">
                <h2>740</h2>
                <p>Tons of Goods</p>
            </div>
            <div className="stat-item">
                <h2>600</h2>
                <p>Satisfied Clients</p>
            </div>
        </div>
    );
};

export default Stats;
