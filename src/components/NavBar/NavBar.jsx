import React, { useState, useEffect } from 'react';
import './NavBar.css';
import logo from "../../assets/logo.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;
    const nav = document.querySelector('.nav');

    const handleScroll = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        // Downscroll
        nav.classList.add('hidden');
      } else {
        // Upscroll
        nav.classList.remove('hidden');
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='nav'>
      <div className='nav-logo'>
        <img src={logo} alt="Cargo Logo" className='logo-img' />
      </div>
      <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <li>
          HOME <span className='dropdown-arrow'>▼</span>
          <div className='dropdown-content'>
            <a href="#home1" onClick={() => setIsMenuOpen(false)}>Submenu 1</a>
            <a href="#home2" onClick={() => setIsMenuOpen(false)}>Submenu 2</a>
            <a href="#home3" onClick={() => setIsMenuOpen(false)}>Submenu 3</a>
          </div>
        </li>
        <li>
          PAGES <span className='dropdown-arrow'>▼</span>
          <div className='dropdown-content'>
            <a href="#pages1" onClick={() => setIsMenuOpen(false)}>Submenu 1</a>
            <a href="#pages2" onClick={() => setIsMenuOpen(false)}>Submenu 2</a>
            <a href="#pages3" onClick={() => setIsMenuOpen(false)}>Submenu 3</a>
          </div>
        </li>
        <li>TRACKING</li>
        <li>
          SERVICES <span className='dropdown-arrow'>▼</span>
          <div className='dropdown-content'>
            <a href="#services1" onClick={() => setIsMenuOpen(false)}>Submenu 1</a>
            <a href="#services2" onClick={() => setIsMenuOpen(false)}>Submenu 2</a>
            <a href="#services3" onClick={() => setIsMenuOpen(false)}>Submenu 3</a>
          </div>
        </li>
        <li>
          BLOG <span className='dropdown-arrow'>▼</span>
          <div className='dropdown-content'>
            <a href="#blog1" onClick={() => setIsMenuOpen(false)}>Submenu 1</a>
            <a href="#blog2" onClick={() => setIsMenuOpen(false)}>Submenu 2</a>
            <a href="#blog3" onClick={() => setIsMenuOpen(false)}>Submenu 3</a>
          </div>
        </li>
        <li className='nav-contact get-quote'>GET A QUOTE</li>
        <li className='nav-contact sign-in'>SIGN IN</li>
      </ul>
      <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default NavBar;