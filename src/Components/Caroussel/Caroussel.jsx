import React, { useState } from 'react';
import './Caroussel.scss';

function Caroussel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const Previous = () => {
        const isFirstSlide = currentIndex === 0;
        setCurrentIndex(isFirstSlide ? images.length - 1 : currentIndex - 1);
    };

    const Next = () => {
        const isLastSlide = currentIndex === images.length - 1;
        setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
    };

    const Slide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="carousel">
            <div className="carousel-image-container">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel-image" />
                <button className="carousel-arrow left" onClick={Previous}>
                    &#10094;
                </button>
                <button className="carousel-arrow right" onClick={Next}>
                    &#10095;
                </button>
            </div>
        </div>
    );
}

export default Caroussel;
