import React from 'react';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <h2>Why Choose Us?</h2>
                        <p>
                            We believe a clean home is a happy home.
                            Our team of professionals is dedicated to providing the highest
                            quality cleaning services with a focus on reliability,
                            eco-friendliness, and attention to detail.
                        </p>
                        <ul style={{ marginTop: '20px' }}>
                            <li><strong>✓ Eco-Friendly:</strong> We use sustainable products.</li>
                            <li><strong>✓ Professional:</strong> Trained and vetted cleaners.</li>
                            <li><strong>✓ Affordable:</strong> Competitive pricing for all.</li>
                        </ul>
                    </div>
                    <div className="about-image">
                        <img
                            src="https://images.unsplash.com/photo-1581578731548-c64695cc6954?auto=format&fit=crop&q=80&w=800"
                            alt="Professional Cleaner"
                            style={{ borderRadius: '20px' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
