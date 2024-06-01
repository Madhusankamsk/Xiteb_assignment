import React, { useState, useEffect } from 'react';
import './Footer.css';
import fort1 from "../../assets/fort1.jpg";
import fort2 from "../../assets/fort2.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faBehance, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setShowButton(currentScrollY > 300);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer-container">
            <div className="newsletter">
                <div className='news-letter-text'>
                    <h2>Weekly Newsletter</h2>
                    <p>There are many variations of passages of lorem ipsum available.</p>
                </div>
                <div className="newsletter-subscribe">
                    <input type="email" placeholder="Enter Your Mail" />
                    <button>SUBSCRIBE</button>
                </div>
            </div>
            <div className="footer-content">
                <div className="footer-section about-us">
                    <h3>About Us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>📞 (+94) 11 434 7575</p>
                    <p>📍 42 Lily Ave, Colombo 00600</p>
                </div>
                <div className="footer-section latest-news">
                    <h3>Latest News</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                    <p>5 Minutes Ago</p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                    <p>5 Minutes Ago</p>
                </div>
                <div className="footer-section customer-service">
                    <h3>Customer Service</h3>
                    <ul>
                        <li>Support Forums</li>
                        <li>Communication</li>
                        <li>FAQs</li>
                        <li>Privacy Policy</li>
                        <li>Rules & Condition</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="footer-section customer-service-images">
                    <h3>Customer Service</h3>
                    <div className="image-grid">
                        <img src={fort1} alt="Service 1" />
                        <img src={fort2} alt="Service 2" />
                        <img src={fort1} alt="Service 3" />
                        <img src={fort2} alt="Service 4" />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-text">
                    <p>Copyright © 2021 All Rights Reserved. Site By Xiteb</p>
                </div>
                <div className="social-icons">
                    <div className="social-icon-circle"><FontAwesomeIcon icon={faFacebookF} /></div>
                    <div className="social-icon-circle"><FontAwesomeIcon icon={faTwitter} /></div>
                    <div className="social-icon-circle"><FontAwesomeIcon icon={faBehance} /></div>
                    <div className="social-icon-circle"><FontAwesomeIcon icon={faInstagram} /></div>
                </div>
            </div>
            {showButton && (
                <button className="scroll-to-top" onClick={scrollToTop}>
                    <FontAwesomeIcon icon={faArrowUp} />
                </button>
            )}
        </footer>
    );
};

export default Footer;
