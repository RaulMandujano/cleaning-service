import React, { useState } from "react";
import config from "../config";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [service, setService] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = `Hello, my name is ${name}.
Email: ${email}
I am interested in: ${service}.
Message: ${message}`;

        const url = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
    };

    return (
        <section id="contact" className="contact-section-modern bg-white">
            <div className="container">
                <div className="section-header">
                    <h2>Get in Touch</h2>
                    <p>Have questions or need an inspection? Our team is ready to help you restore your home.</p>
                </div>

                <div className="contact-grid-refined">
                    {/* Left: Contact Form Card */}
                    <div className="contact-form-card">
                        <form className="refined-form" onSubmit={handleSubmit}>
                            <div className="form-group-full">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    required
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="form-group-full">
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    placeholder="email@example.com"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group-full">
                                <label>Service Needed</label>
                                <select required onChange={(e) => setService(e.target.value)}>
                                    <option value="">Select a Service</option>
                                    {config.services.map((s, i) => (
                                        <option key={i} value={s.name}>{s.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group-full">
                                <label>Message</label>
                                <textarea
                                    rows="4"
                                    placeholder="How can we help?"
                                    required
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-full">
                                <FaWhatsapp className="btn-icon-left" /> Send via WhatsApp
                            </button>
                        </form>
                    </div>

                    {/* Right: Contact Info Card */}
                    <div className="contact-info-card-refined">
                        <h3>Contact Information</h3>
                        <p className="info-subtitle">Reach out to us directly for immediate assistance or emergency mold removal.</p>

                        <div className="info-items-list">
                            <div className="info-item-modern">
                                <div className="info-icon-box"><FaPhone /></div>
                                <div className="info-text">
                                    <span>Phone Number</span>
                                    <strong>{config.phone}</strong>
                                </div>
                            </div>

                            <div className="info-item-modern">
                                <div className="info-icon-box"><FaEnvelope /></div>
                                <div className="info-text">
                                    <span>Email Address</span>
                                    <strong>{config.email}</strong>
                                </div>
                            </div>

                            <div className="info-item-modern">
                                <div className="info-icon-box"><FaMapMarkerAlt /></div>
                                <div className="info-text">
                                    <span>Service Area</span>
                                    <strong>{config.address}</strong>
                                </div>
                            </div>

                            <div className="info-item-modern">
                                <div className="info-icon-box"><FaClock /></div>
                                <div className="info-text">
                                    <span>Working Hours</span>
                                    <strong>{config.hours}</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
