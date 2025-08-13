import React from "react";
import "./VerticalTimeline.css";

function VerticalTimeline({ events }) {
    return (
        <div className="vertical-timeline">
            {events.map((event, index) => (
                <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                    <div className="timeline-content">
                        <div className="timeline-icon">{event.icon}</div>
                        <div className="timeline-year">{event.year}</div>
                        <h3 className="timeline-title">{event.title}</h3>
                        <p className="timeline-description">{event.description}</p>
                    </div>
                    <div className="timeline-dot"></div>
                </div>
            ))}
        </div>
    );
}

export default VerticalTimeline;