import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container nav-content">
                <div className="logo" onClick={() => window.scrollTo(0, 0)} aria-label="Go to top">
                    <div className="logo-image-wrap">
                        <img
                            src="/bg-logo.png"
                            alt="First Responders logo"
                            className="navbar-logo"
                        />
                    </div>
                </div>
                <div className="nav-links">
                    <Link to="services" smooth={true} duration={500} className="nav-link">
                        Services
                    </Link>
                    <Link to="about" smooth={true} duration={500} className="nav-link">
                        Why Us
                    </Link>
                    <Link to="process" smooth={true} duration={500} className="nav-link">
                        Our Process
                    </Link>
                    <Link to="testimonials" smooth={true} duration={500} className="nav-link">
                        Reviews
                    </Link>
                    <Link to="contact" smooth={true} duration={500}>
                        <button className="btn btn-primary">Get a Quote</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
