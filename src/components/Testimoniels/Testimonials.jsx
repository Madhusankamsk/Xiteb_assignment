import React, { useState } from 'react';
import './Testimonials.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "Integer congue elit non semper laoreet sed lectus orci posuere nisl tempor sed felis ac mauris. Pellentesque imperdiet urna. Integer vitae felis vel magna posuere vestibulum. Nam rutrum congue diam. Aliquam malesuada mauris et augue. Curabitur laoreet convallis nisl pellentesque bibendum.",
            author: "JOHN DEO",
            position: "Managing Director"
        },
        {
            quote: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean euismod, urna eu tincidunt consectetur, turpis lorem pulvinar dui, et tincidunt ligula elit non risus.",
            author: "JANE DOE",
            position: "Chief Executive Officer"
        },
        {
            quote: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra, odio et bibendum varius, ipsum dui convallis ligula, eget scelerisque arcu nulla nec turpis.",
            author: "SAM SMITH",
            position: "Product Manager"
        },
        {
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis magna a augue volutpat pellentesque non a felis. Phasellus fermentum leo vel erat varius, nec vehicula nisi bibendum.",
            author: "ALICE JOHNSON",
            position: "Marketing Head"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    const { quote, author, position } = testimonials[currentIndex];

    return (
        <div className="testimonials-container">
            <div className="trusted-clients">
                <h2>TRUSTED CLIENTS</h2>
                <p>LOREM IPSUM DOLOR SIT AMET CONSECTETUR</p>
                <div className="testimonial">
                    <p>{quote}</p>
                    <div className="author">
                        <p>{author}</p>
                        <span>{position}</span>
                    </div>
                </div>
                <div className="navigation">
                    <button onClick={handlePrevClick}><FontAwesomeIcon icon={faChevronLeft} /></button>
                    <button onClick={handleNextClick}><FontAwesomeIcon icon={faChevronRight} /></button>
                </div>
            </div>
            <div className="why-choose-us">
                <h2>WHY CHOOSE US</h2>
                <p>LOREM IPSUM DOLOR SIT AMET CONSECTETUR</p>
                <ul className='unorderdlist' >
                    <li>
                        <span>Dui ac hendrerit elementum quam ipsum auctor lorem</span>
                        <button>+</button>
                    </li>
                    <li>
                        <span>Mauris vel magna a est lobortis volutpat</span>
                        <button>+</button>
                    </li>
                    <li>
                        <span>Sed bibendum ornare lorem mauris feugiat suspendisse neque</span>
                        <button>+</button>
                    </li>
                    <li>
                        <span>Nulla scelerisque dui hendrerit elementum quam</span>
                        <button>+</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Testimonials;
