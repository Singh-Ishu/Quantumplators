import React from "react";
import HorizontalTimeline from "../../components/HorizontalTimeline/HorizontalTimeline";
import "./Timeline.css";

function Timeline() {
    const timelineEvents = [
        {
            year: "2015",
            title: "Foundation",
            description: "Company established",
            color: "#800080"
        },
        {
            year: "2017",
            title: "First Research",
            description: "Quantum algorithm breakthrough",
            color: "#a020f0"
        },
        {
            year: "2018",
            title: "Lab Opening",
            description: "State-of-the-art facility",
            color: "#c040ff"
        },
        {
            year: "2020",
            title: "Major Grant",
            description: "$10M NSF funding",
            color: "#d060ff"
        },
        {
            year: "2021",
            title: "Quantum Supremacy",
            description: "Historic achievement",
            color: "#e080ff"
        },
        {
            year: "2023",
            title: "Commercial Launch",
            description: "Enterprise services",
            color: "#f0a0ff"
        },
        {
            year: "2024",
            title: "Future Vision",
            description: "Next-gen technologies",
            color: "#ffc0ff"
        }
    ];

    return (
        <div className="timeline-page">
            <div className="timeline-container">
                <div className="timeline-hero">
                    <h1>Timeline Overview</h1>
                    <p>A horizontal view of our major milestones and achievements</p>
                </div>
                <HorizontalTimeline events={timelineEvents} />
            </div>
        </div>
    );
}

export default Timeline;