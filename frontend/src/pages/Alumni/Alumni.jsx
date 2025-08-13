import React from "react";
import AlumniCards from "../../components/AlumniCards/AlumniCards";
import "./Alumni.css";

function Alumni() {
    const alumni = [
        {
            id: 1,
            name: "Dr. Sarah Chen",
            photo: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
            currentPosition: "Senior Quantum Researcher",
            company: "IBM Quantum",
            graduationYear: "2019",
            specialization: "Quantum Algorithms",
            achievements:
                "Led development of quantum error correction protocols",
            linkedin: "#",
            email: "sarah.chen@example.com",
        },
        {
            id: 2,
            name: "Dr. Michael Rodriguez",
            photo: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
            currentPosition: "Principal Scientist",
            company: "Google Quantum AI",
            graduationYear: "2018",
            specialization: "Quantum Machine Learning",
            achievements: "Published 15+ papers on quantum ML algorithms",
            linkedin: "#",
            email: "michael.rodriguez@example.com",
        },
        {
            id: 3,
            name: "Dr. Emily Johnson",
            photo: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
            currentPosition: "Quantum Computing Director",
            company: "Microsoft Azure Quantum",
            graduationYear: "2017",
            specialization: "Quantum Cryptography",
            achievements: "Pioneer in quantum key distribution systems",
            linkedin: "#",
            email: "emily.johnson@example.com",
        },
        {
            id: 4,
            name: "Dr. David Kim",
            photo: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
            currentPosition: "Co-Founder & CTO",
            company: "QuantumTech Innovations",
            graduationYear: "2020",
            specialization: "Quantum Hardware",
            achievements: "Founded successful quantum computing startup",
            linkedin: "#",
            email: "david.kim@example.com",
        },
        {
            id: 5,
            name: "Dr. Lisa Wang",
            photo: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
            currentPosition: "Research Scientist",
            company: "Amazon Braket",
            graduationYear: "2021",
            specialization: "Quantum Optimization",
            achievements: "Expert in variational quantum algorithms",
            linkedin: "#",
            email: "lisa.wang@example.com",
        },
        {
            id: 6,
            name: "Dr. James Thompson",
            photo: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
            currentPosition: "Quantum Software Engineer",
            company: "Rigetti Computing",
            graduationYear: "2022",
            specialization: "Quantum Software",
            achievements: "Developed quantum programming frameworks",
            linkedin: "#",
            email: "james.thompson@example.com",
        },
    ];

    return (
        <div className="alumni-page">
            <div className="alumni-container">
                <div className="alumni-hero">
                    <h1>Notable Alumni</h1>
                    <p>
                        Meet our distinguished graduates who are leading the
                        quantum revolution worldwide
                    </p>
                </div>
                <AlumniCards alumni={alumni} />
            </div>
        </div>
    );
}

export default Alumni;
