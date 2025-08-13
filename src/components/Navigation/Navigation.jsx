import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/history", label: "History" },
        { path: "/timeline", label: "Timeline" },
        { path: "/gallery", label: "Gallery" },
        { path: "/projects", label: "Projects" },
        { path: "/alumni", label: "Alumni" },
        { path: "/blogs", label: "Blogs" },
        { path: "/contact", label: "Contact" },
    ];

    return (
        <nav className="navigation">
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    Quantumplators
                </Link>
                
                <div className={`nav-menu ${isOpen ? "active" : ""}`}>
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`nav-link ${
                                location.pathname === item.path ? "active" : ""
                            }`}
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                <div
                    className={`nav-toggle ${isOpen ? "active" : ""}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;