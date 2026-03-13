import React from "react";
import { services } from "../data/services";

export default function Services() {
    return (
        <section id="services" className="bg-light">
            <div className="container">
                <div className="section-header">
                    <h2>Restoration & Cleaning Services</h2>
                    <p>Professional solutions tailored for modern living environments.</p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-image-wrap">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="service-image"
                                />
                            </div>
                            <div className="service-card-body">
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
