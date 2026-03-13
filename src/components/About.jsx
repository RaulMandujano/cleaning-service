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
                            src="/limpieza profesional 2.png"
                            alt="Professional cleaning team"
                            style={{ borderRadius: '20px', width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
