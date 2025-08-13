import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import "./Contact.css";

function Contact() {
    return (
        <div className="contact-page">
            <div className="contact-container">
                <div className="contact-hero">
                    <h1>Contact Us</h1>
                    <p>Get in touch with our team for collaborations, inquiries, or research opportunities</p>
                </div>
                
                <div className="contact-content">
                    <div className="contact-info">
                        <div className="info-section">
                            <h3>Research Inquiries</h3>
                            <p>Interested in our research or potential collaborations?</p>
                            <div className="contact-detail">
                                <strong>Email:</strong> research@quantumplators.com
                            </div>
                            <div className="contact-detail">
                                <strong>Phone:</strong> +1 (555) 123-4567
                            </div>
                        </div>
                        
                        <div className="info-section">
                            <h3>Academic Partnerships</h3>
                            <p>Exploring academic collaborations and joint research projects?</p>
                            <div className="contact-detail">
                                <strong>Email:</strong> partnerships@quantumplators.com
                            </div>
                            <div className="contact-detail">
                                <strong>Phone:</strong> +1 (555) 123-4568
                            </div>
                        </div>
                        
                        <div className="info-section">
                            <h3>Career Opportunities</h3>
                            <p>Join our team of quantum computing pioneers.</p>
                            <div className="contact-detail">
                                <strong>Email:</strong> careers@quantumplators.com
                            </div>
                            <div className="contact-detail">
                                <strong>Phone:</strong> +1 (555) 123-4569
                            </div>
                        </div>
                        
                        <div className="info-section">
                            <h3>Visit Our Lab</h3>
                            <div className="contact-detail">
                                <strong>Address:</strong><br />
                                Quantumplators Research Center<br />
                                123 Quantum Drive<br />
                                Innovation District<br />
                                Tech City, TC 12345
                            </div>
                        </div>
                        
                        <div className="info-section">
                            <h3>Office Hours</h3>
                            <div className="contact-detail">
                                <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM<br />
                                <strong>Saturday:</strong> 10:00 AM - 4:00 PM<br />
                                <strong>Sunday:</strong> Closed
                            </div>
                        </div>
                    </div>
                    
                    <div className="contact-form-section">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;