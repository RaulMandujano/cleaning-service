import React from "react";
import config from "../config";
import { FaStar, FaQuoteRight } from "react-icons/fa";

export default function Testimonials() {
    return (
        <section id="reviews" className="testimonials-section bg-light">
            <div className="container">
                <div className="section-header">
                    <h2>Client Satisfaction</h2>
                    <p>Trusted by homeowners across the city for quality and reliability.</p>

                    <div className="average-rating">
                        <div className="rating-stars">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        <span className="rating-value">4.8 / 5.0</span>
                        <span className="rating-count">Professional Rating</span>
                    </div>
                </div>

                <div className="testimonials-grid-refined">
                    {config.testimonials.map((t, i) => (
                        <div key={i} className="testimonial-card-refined">
                            <FaQuoteRight className="quote-icon-corner" />
                            <div className="card-stars">
                                {[...Array(t.stars)].map((_, idx) => (
                                    <FaStar key={idx} />
                                ))}
                            </div>
                            <p className="testimonial-text">{t.text}</p>
                            <div className="testimonial-author">
                                <span className="author-name">{t.name}</span>
                                <span className="author-location">{t.location}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
