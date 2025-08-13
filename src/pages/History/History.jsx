import React from "react";
import VerticalTimeline from "../../components/VerticalTimeline/VerticalTimeline";
import "./History.css";

function History() {
    const historyEvents = [
        {
            year: "2015",
            title: "Foundation",
            description: "Quantumplators was founded by a group of quantum physics researchers from leading universities.",
            icon: "🚀"
        },
        {
            year: "2017",
            title: "First Breakthrough",
            description: "Developed our first quantum algorithm for optimization problems, published in Nature Quantum Information.",
            icon: "🔬"
        },
        {
            year: "2018",
            title: "Lab Expansion",
            description: "Opened our state-of-the-art quantum computing laboratory with advanced quantum processors.",
            icon: "🏢"
        },
        {
            year: "2019",
            title: "Industry Partnership",
            description: "Formed strategic partnerships with major tech companies to commercialize quantum solutions.",
            icon: "🤝"
        },
        {
            year: "2020",
            title: "Research Grant",
            description: "Received $10M research grant from the National Science Foundation for quantum cryptography research.",
            icon: "💰"
        },
        {
            year: "2021",
            title: "Quantum Supremacy",
            description: "Achieved quantum supremacy in specific computational tasks, marking a major milestone.",
            icon: "👑"
        },
        {
            year: "2022",
            title: "Global Recognition",
            description: "Won the International Quantum Computing Excellence Award for outstanding contributions to the field.",
            icon: "🏆"
        },
        {
            year: "2023",
            title: "Commercial Launch",
            description: "Launched our first commercial quantum computing service for enterprise clients.",
            icon: "🌟"
        },
        {
            year: "2024",
            title: "Future Vision",
            description: "Continuing to push boundaries with next-generation quantum technologies and AI integration.",
            icon: "🔮"
        }
    ];

    return (
        <div className="history-page">
            <div className="history-container">
                <div className="history-hero">
                    <h1>Our Journey</h1>
                    <p>Tracing the evolution of Quantumplators from inception to innovation</p>
                </div>
                <VerticalTimeline events={historyEvents} />
            </div>
        </div>
    );
}

export default History;