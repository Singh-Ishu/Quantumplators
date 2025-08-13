import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import "./Gallery.css";

function Gallery() {
    const galleryImages = [
        {
            id: 1,
            src: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg",
            title: "Quantum Computing Lab",
            description: "Our state-of-the-art quantum computing laboratory with advanced processors"
        },
        {
            id: 2,
            src: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
            title: "Research Team",
            description: "Our dedicated team of quantum physicists and researchers"
        },
        {
            id: 3,
            src: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
            title: "Innovation Workshop",
            description: "Collaborative workspace for breakthrough discoveries"
        },
        {
            id: 4,
            src: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg",
            title: "Quantum Processors",
            description: "Close-up view of our quantum processing units"
        },
        {
            id: 5,
            src: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
            title: "Conference Presentation",
            description: "Presenting our latest research at international conferences"
        },
        {
            id: 6,
            src: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
            title: "Awards Ceremony",
            description: "Recognition for our contributions to quantum computing"
        }
    ];

    return (
        <div className="gallery-page">
            <div className="gallery-container">
                <div className="gallery-hero">
                    <h1>Gallery</h1>
                    <p>Explore our journey through images - from lab work to achievements</p>
                </div>
                <Carousel images={galleryImages} />
            </div>
        </div>
    );
}

export default Gallery;