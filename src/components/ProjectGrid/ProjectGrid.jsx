import React, { useState } from "react";
import "./ProjectGrid.css";

function ProjectGrid({ projects }) {
    const [filter, setFilter] = useState("All");
    const [hoveredProject, setHoveredProject] = useState(null);

    const categories = ["All", ...new Set(projects.map(project => project.category))];
    
    const filteredProjects = filter === "All" 
        ? projects 
        : projects.filter(project => project.category === filter);

    const getStatusColor = (status) => {
        switch (status) {
            case "Published": return "#4CAF50";
            case "In Progress": return "#FF9800";
            case "Under Review": return "#2196F3";
            default: return "#800080";
        }
    };

    return (
        <div className="project-grid-container">
            <div className="project-filters">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`filter-btn ${filter === category ? 'active' : ''}`}
                        onClick={() => setFilter(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="project-grid">
                {filteredProjects.map(project => (
                    <div
                        key={project.id}
                        className="project-card"
                        onMouseEnter={() => setHoveredProject(project.id)}
                        onMouseLeave={() => setHoveredProject(null)}
                    >
                        <div className="project-image-container">
                            <img 
                                src={project.image} 
                                alt={project.title}
                                className="project-image"
                            />
                            <div className="project-overlay">
                                <button className="project-link-btn">
                                    View Details
                                </button>
                            </div>
                        </div>
                        
                        <div className="project-content">
                            <div className="project-header">
                                <span 
                                    className="project-status"
                                    style={{ backgroundColor: getStatusColor(project.status) }}
                                >
                                    {project.status}
                                </span>
                                <span className="project-year">{project.year}</span>
                            </div>
                            
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-category">{project.category}</p>
                            <p className="project-description">{project.description}</p>
                            
                            <div className="project-actions">
                                <button className="action-btn primary">
                                    Read Paper
                                </button>
                                <button className="action-btn secondary">
                                    View Code
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectGrid;