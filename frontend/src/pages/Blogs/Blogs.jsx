import React from "react";
import BlogList from "../../components/BlogList/BlogList";
import "./Blogs.css";

function Blogs() {
    const blogs = [
        {
            id: 1,
            title: "The Future of Quantum Computing: Breaking Through Classical Limitations",
            intro: "Explore how quantum computing is revolutionizing computational capabilities, from solving complex optimization problems to advancing artificial intelligence. We delve into the latest breakthroughs in quantum supremacy and discuss what this means for industries ranging from finance to pharmaceuticals.",
            author: "Dr. Sarah Chen",
            date: "March 15, 2024",
            readTime: "8 min read",
            category: "Quantum Computing",
            image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg",
            tags: ["Quantum Supremacy", "AI", "Technology"],
        },
        {
            id: 2,
            title: "Quantum Cryptography: Securing the Digital Future",
            intro: "As cyber threats evolve, traditional encryption methods face unprecedented challenges. Discover how quantum cryptography offers unbreakable security through the principles of quantum mechanics. Learn about quantum key distribution, post-quantum cryptography, and the race to build quantum-safe communication networks.",
            author: "Dr. Michael Rodriguez",
            date: "February 28, 2024",
            readTime: "6 min read",
            category: "Cryptography",
            image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
            tags: ["Security", "Encryption", "Quantum Keys"],
        },
        {
            id: 3,
            title: "Quantum Machine Learning: Where AI Meets Quantum Physics",
            intro: "The convergence of quantum computing and machine learning promises exponential speedups in data processing and pattern recognition. Explore variational quantum algorithms, quantum neural networks, and how quantum advantage could transform everything from drug discovery to financial modeling.",
            author: "Dr. Emily Johnson",
            date: "January 20, 2024",
            readTime: "10 min read",
            category: "Machine Learning",
            image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
            tags: ["AI", "Neural Networks", "Algorithms"],
        },
    ];

    return (
        <div className="blogs-page">
            <div className="blogs-container">
                <div className="blogs-hero">
                    <h1>Blogs & Articles</h1>
                    <p>
                        Insights, research findings, and thought leadership in
                        quantum computing
                    </p>
                </div>
                <BlogList blogs={blogs} />
            </div>
        </div>
    );
}

export default Blogs;
