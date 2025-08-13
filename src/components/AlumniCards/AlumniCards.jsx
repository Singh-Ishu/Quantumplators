import React, { useState } from "react";
import "./AlumniCards.css";

function AlumniCards({ alumni }) {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <div className="alumni-cards-container">
            <div className="alumni-grid">
                {alumni.map(person => (
                    <div
                        key={person.id}
                        className="alumni-card"
                        onMouseEnter={() => setHoveredCard(person.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <div className="alumni-photo-container">
                            <img 
                                src={person.photo} 
                                alt={person.name}
                                className="alumni-photo"
                            />
                            <div className="alumni-overlay">
                                <div className="alumni-contact">
                                    <a href={person.linkedin} className="contact-btn linkedin">
                                        LinkedIn
                                    </a>
                                    <a href={`mailto:${person.email}`} className="contact-btn email">
                                        Email
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="alumni-info">
                            <h3 className="alumni-name">{person.name}</h3>
                            <p className="alumni-position">{person.currentPosition}</p>
                            <p className="alumni-company">{person.company}</p>
                            
                            <div className="alumni-details">
                                <div className="detail-item">
                                    <span className="detail-label">Graduated:</span>
                                    <span className="detail-value">{person.graduationYear}</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">Specialization:</span>
                                    <span className="detail-value">{person.specialization}</span>
                                </div>
                            </div>
                            
                            <div className="alumni-achievements">
                                <h4>Key Achievement</h4>
                                <p>{person.achievements}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AlumniCards;