import React from "react";
import config from "../config";

export default function Services() {
    return (
        <section id="services" className="bg-light">
            <div className="container">
                <div className="section-header">
                    <h2>Restoration & Cleaning Services</h2>
                    <p>Professional solutions tailored for modern living environments.</p>
                </div>

                <div className="services-grid">
                    {config.services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon-box">
                                <span className="service-icon">{service.icon}</span>
                            </div>
                            <h3 className="service-title">{service.name}</h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
