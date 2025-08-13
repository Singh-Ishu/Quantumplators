import React from "react";
import "./About.css";

function About() {
    return (
        <div className="about-page">
            <div className="about-container">
                <div className="about-hero">
                    <h1>About Quantumplators</h1>
                    <p className="about-subtitle">
                        Pioneering the future of quantum computing and advanced mathematics
                    </p>
                </div>

                <div className="about-content">
                    <section className="about-section">
                        <h2>Our Mission</h2>
                        <p>
                            At Quantumplators, we are dedicated to advancing the frontiers of quantum computing, 
                            mathematical modeling, and computational physics. Our team of researchers, scientists, 
                            and engineers work collaboratively to solve complex problems that shape the future of technology.
                        </p>
                    </section>

                    <section className="about-section">
                        <h2>What We Do</h2>
                        <div className="about-grid">
                            <div className="about-card">
                                <h3>Quantum Research</h3>
                                <p>
                                    Developing cutting-edge quantum algorithms and exploring quantum supremacy 
                                    applications in various fields including cryptography and optimization.
                                </p>
                            </div>
                            <div className="about-card">
                                <h3>Mathematical Modeling</h3>
                                <p>
                                    Creating sophisticated mathematical models to simulate complex systems 
                                    and predict outcomes in physics, chemistry, and engineering.
                                </p>
                            </div>
                            <div className="about-card">
                                <h3>Innovation Lab</h3>
                                <p>
                                    Our state-of-the-art laboratory serves as a hub for experimentation, 
                                    prototyping, and breakthrough discoveries in quantum technologies.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="about-section">
                        <h2>Our Vision</h2>
                        <p>
                            We envision a world where quantum computing revolutionizes how we approach 
                            complex problems, from drug discovery to climate modeling. Through our research 
                            and development efforts, we aim to make quantum technologies accessible and 
                            practical for real-world applications.
                        </p>
                    </section>

                    <section className="about-section">
                        <h2>Core Values</h2>
                        <ul className="values-list">
                            <li><strong>Innovation:</strong> Pushing boundaries and exploring uncharted territories</li>
                            <li><strong>Collaboration:</strong> Working together to achieve breakthrough results</li>
                            <li><strong>Excellence:</strong> Maintaining the highest standards in research and development</li>
                            <li><strong>Impact:</strong> Creating solutions that benefit society and advance human knowledge</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default About;