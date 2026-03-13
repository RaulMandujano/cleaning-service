import React from "react";
import config from "../config";
import { Link } from "react-scroll";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const socialIcons = {
    Facebook: <FaFacebook />,
    Instagram: <FaInstagram />,
    LinkedIn: <FaLinkedin />
};

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-refined">
            <div className="container">
                <div className="footer-grid-refined">
                    {/* Column 1: Company Description */}
                    <div className="footer-col">
                        <h3 className="footer-logo-text">
                            <img
                                src="/bg-logo.png"
                                alt="company logo"
                                className="footer-logo-img"
                            />
                        </h3>
                        <p className="footer-desc">{config.footer.description}</p>
                        <div className="footer-socials">
                            {config.footer.socials.map((social, i) => (
                                <a key={i} href={social.url} className="social-icon" aria-label={social.name}>
                                    {socialIcons[social.icon]}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div className="footer-col">
                        <h4>Our Services</h4>
                        <ul className="footer-list">
                            {config.services.map((service, i) => (
                                <li key={i}>
                                    <Link to="services" className="footer-link" smooth={true} duration={500}>{service.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Company Links */}
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul className="footer-list">
                            {config.footer.links.map((link, i) => (
                                <li key={i}>
                                    <Link to={link.target} className="footer-link" smooth={true} duration={500}>{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div className="footer-col">
                        <h4>Contact Info</h4>
                        <div className="footer-contact-details">
                            <div className="footer-contact-item">
                                <div className="footer-icon-wrap"><FaPhone /></div>
                                <span>{config.phone}</span>
                            </div>
                            <div className="footer-contact-item">
                                <div className="footer-icon-wrap"><FaEnvelope /></div>
                                <span>{config.email}</span>
                            </div>
                            <div className="footer-contact-item">
                                <div className="footer-icon-wrap"><FaMapMarkerAlt /></div>
                                <span>{config.address}</span>
                            </div>
                            <div className="footer-contact-item">
                                <div className="footer-icon-wrap"><FaClock /></div>
                                <span>{config.hours}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-refined">
                    <p>&copy; {currentYear}. All rights reserved.</p>
                    <div className="footer-legal-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
