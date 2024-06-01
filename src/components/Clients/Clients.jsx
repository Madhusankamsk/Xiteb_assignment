import React from 'react';
import './Clients.css';

const Clients = () => {
    return (
        <div className="clients-container">
            <div className="client-item">
                <img src="path-to-logo1" alt="Reuss" />
                <p>REUSS</p>
                <span>SEO COMPANY</span>
            </div>
            <div className="client-item">
                <img src="path-to-logo2" alt="Genesis" />
                <p>GENESIS</p>
            </div>
            <div className="client-item">
                <img src="path-to-logo3" alt="Integrio" />
                <p>INTEGRIO.CORP</p>
            </div>
            <div className="client-item">
                <img src="path-to-logo4" alt="Brainbiz" />
                <p>BRAINBIZ</p>
                <span>Digital Agency</span>
            </div>
            <div className="client-item">
                <img src="path-to-logo5" alt="ZigZag" />
                <p>ZIG ZAG</p>
            </div>
        </div>
    );
};

export default Clients;
