import React from "react";
import "./BlogList.css";

function BlogList({ blogs }) {
    return (
        <div className="blog-list">
            {blogs.map(blog => (
                <article key={blog.id} className="blog-card">
                    <div className="blog-image-container">
                        <img 
                            src={blog.image} 
                            alt={blog.title}
                            className="blog-image"
                        />
                        <div className="blog-category-badge">
                            {blog.category}
                        </div>
                    </div>
                    
                    <div className="blog-content">
                        <div className="blog-meta">
                            <span className="blog-author">{blog.author}</span>
                            <span className="blog-date">{blog.date}</span>
                            <span className="blog-read-time">{blog.readTime}</span>
                        </div>
                        
                        <h2 className="blog-title">{blog.title}</h2>
                        
                        <p className="blog-intro">{blog.intro}</p>
                        
                        <div className="blog-tags">
                            {blog.tags.map(tag => (
                                <span key={tag} className="blog-tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        
                        <div className="blog-actions">
                            <button className="read-more-btn">
                                Read Full Article
                            </button>
                            <button className="share-btn">
                                Share
                            </button>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
}

export default BlogList;