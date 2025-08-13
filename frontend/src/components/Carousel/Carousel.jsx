import React, { useState, useEffect } from "react";
import "./Carousel.css";

function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, [images.length, isAutoPlaying]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 5000);
    };

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 5000);
    };

    const goToNext = () => {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 5000);
    };

    return (
        <div className="carousel">
            <div className="carousel-container">
                <button className="carousel-btn prev" onClick={goToPrevious}>
                    ‹
                </button>
                
                <div className="carousel-content">
                    <div 
                        className="carousel-track"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {images.map((image, index) => (
                            <div key={image.id} className="carousel-slide">
                                <img 
                                    src={image.src} 
                                    alt={image.title}
                                    className="carousel-image"
                                />
                                <div className="carousel-overlay">
                                    <h3 className="carousel-title">{image.title}</h3>
                                    <p className="carousel-description">{image.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <button className="carousel-btn next" onClick={goToNext}>
                    ›
                </button>
            </div>
            
            <div className="carousel-indicators">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
            
            <div className="carousel-counter">
                {currentIndex + 1} / {images.length}
            </div>
        </div>
    );
}

export default Carousel;