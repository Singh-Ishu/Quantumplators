import React from "react";
import ProjectGrid from "../../components/ProjectGrid/ProjectGrid";
import "./Projects.css";

function Projects() {
    const projects = [
        {
            id: 1,
            title: "Quantum Cryptography Protocol",
            description: "Revolutionary quantum key distribution system ensuring unbreakable encryption for secure communications.",
            image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg",
            category: "Cryptography",
            status: "Published",
            year: "2023",
            link: "#"
        },
        {
            id: 2,
            title: "Quantum Machine Learning Framework",
            description: "Advanced framework combining quantum computing with machine learning for exponential speedup in data processing.",
            image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
            category: "Machine Learning",
            status: "In Progress",
            year: "2024",
            link: "#"
        },
        {
            id: 3,
            title: "Quantum Optimization Algorithms",
            description: "Novel algorithms for solving complex optimization problems using quantum annealing and variational methods.",
            image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
            category: "Optimization",
            status: "Published",
            year: "2023",
            link: "#"
        },
        {
            id: 4,
            title: "Quantum Error Correction",
            description: "Breakthrough research in quantum error correction codes for fault-tolerant quantum computing systems.",
            image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg",
            category: "Error Correction",
            status: "Under Review",
            year: "2024",
            link: "#"
        },
        {
            id: 5,
            title: "Quantum Simulation Platform",
            description: "Comprehensive platform for simulating quantum systems and validating quantum algorithms before hardware implementation.",
            image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
            category: "Simulation",
            status: "Published",
            year: "2022",
            link: "#"
        },
        {
            id: 6,
            title: "Quantum Network Architecture",
            description: "Design and implementation of quantum internet infrastructure for distributed quantum computing applications.",
            image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
            category: "Networking",
            status: "In Progress",
            year: "2024",
            link: "#"
        }
    ];

    return (
        <div className="projects-page">
            <div className="projects-container">
                <div className="projects-hero">
                    <h1>Projects & Research</h1>
                    <p>Explore our groundbreaking research projects and published papers in quantum computing</p>
                </div>
                <ProjectGrid projects={projects} />
            </div>
        </div>
    );
}

export default Projects;