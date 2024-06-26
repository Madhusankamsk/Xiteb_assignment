import React, { useState } from 'react';
import './Hero.css';
import fort1 from "../../assets/fort1.jpg";
import hero2 from "../../assets/hero2.webp";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: fort1,
      title: 'Best Shipping Partner',
      description: 'Amet, tempus egestas facilisis volutpat viverra molestie lobortis posuere maecenas. molestie lobortis posuere maecenas. Eget sapien, gravida neque.',
    },
    {
      image: hero2,
      title: 'Reliable Shipping Services',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="hero-container">
      <div className="hero-slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            key={index}
          >
            <div className="hero-content-tile">
              <div className="hero-text">
              <p><span className="small-text-line">| </span><span className="small-text">LOGISTIC</span></p>
                <h1>{slide.title.split(' ')[0]} <span>{slide.title.split(' ')[1]}</span> <br/> <span className="highlight">{slide.title.split(' ')[2]}</span></h1>
                <p>{slide.description}</p>
                <button className="discover-button">DISCOVER MORE</button>
              </div>
            </div>
            <div className="hero-image">
              <img src={slide.image} alt={`Slide ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>
      <div className="slider-controls">
        <div className="slide-counter">
          {currentSlide + 1} / {slides.length}
        </div>
        <button onClick={prevSlide} className="prev-slide">←</button>
        <button onClick={nextSlide} className="next-slide">→</button>
      </div>
     
      <div className="vertical-text">
        #CARGOTONLOGISTIC
      </div>
    </div>
  );
}

export default Hero;