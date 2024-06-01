import React, { useState } from 'react';
import './Service.css';
import fort1 from "../../assets/fort1.jpg";
import fort2 from "../../assets/fort2.jpg";

const services = [
    {
        title: 'Air Freight Services',
        description: 'At our Auto Service garage, we fully appreciate how difficult occur it is for people to find.',
        image: fort1, // Replace with actual image URL
    },
    {
        title: 'Drone Services',
        description: 'These are unique and often they differ from one industry to the other.',
        image: fort1, // Replace with actual image URL
    },
    {
        title: 'Freight Services',
        description: 'Our ocean freight services ensure timely delivery for your shipping needs.',
        image: fort1, // Replace with actual image URL
    },
    {
        title: 'Warehouse Solutions',
        description: 'We provide state-of-the-art warehouse solutions to manage your inventory.',
        image: fort1, // Replace with actual image URL
    },
];

const Service = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="service-container">
            <p className="service-subtitle">Real Solution, Real Fast!</p>
            <h1 className="service-title">Best Global Logistics Solutions.</h1>
            <div className="service-carousel">
                {services.slice(currentIndex, currentIndex + 2).map((service, index) => (
                    <div key={index} className="service-card">
                        <img src={service.image} alt={service.title} className="service-image" />
                        <div className="service-info">
                            <h2 className="service-card-title">{service.title}</h2>
                            <p className="service-card-description">{service.description}</p>
                            <a href="#" className="service-read-more">Read More</a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="carousel-footer-container">
                <footer className="service-footer">
                    Logistic & Transport Solutions Saves Your Time. <a href="#" className="service-find-solutions">Find Your Solutions</a>
                </footer>
                <div className="carousel-dots">
                    {services.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${currentIndex === index ? 'active' : ''}`}
                            onClick={() => handleDotClick(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Service;
