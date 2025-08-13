import React, { useState } from "react";
import "./HorizontalTimeline.css";

function HorizontalTimeline({ events }) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="horizontal-timeline">
            <div className="timeline-track">
                <div className="timeline-line"></div>
                {events.map((event, index) => (
                    <div
                        key={index}
                        className={`timeline-point ${index === activeIndex ? 'active' : ''}`}
                        style={{ left: `${(index / (events.length - 1)) * 100}%` }}
                        onClick={() => setActiveIndex(index)}
                    >
                        <div 
                            className="timeline-dot"
                            style={{ backgroundColor: event.color }}
                        ></div>
                        <div className="timeline-year">{event.year}</div>
                    </div>
                ))}
            </div>
            
            <div className="timeline-content-area">
                <div className="timeline-card">
                    <h3 style={{ color: events[activeIndex].color }}>
                        {events[activeIndex].title}
                    </h3>
                    <p className="timeline-year-large">{events[activeIndex].year}</p>
                    <p className="timeline-desc">{events[activeIndex].description}</p>
                </div>
            </div>
            
            <div className="timeline-navigation">
                <button 
                    onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
                    disabled={activeIndex === 0}
                    className="nav-btn prev"
                >
                    ← Previous
                </button>
                <span className="timeline-counter">
                    {activeIndex + 1} of {events.length}
                </span>
                <button 
                    onClick={() => setActiveIndex(Math.min(events.length - 1, activeIndex + 1))}
                    disabled={activeIndex === events.length - 1}
                    className="nav-btn next"
                >
                    Next →
                </button>
            </div>
        </div>
    );
}

export default HorizontalTimeline;