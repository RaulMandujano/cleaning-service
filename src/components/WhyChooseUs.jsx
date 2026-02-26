import React from "react";
import config from "../config";
import {
    FaShieldAlt,
    FaLeaf,
    FaClock,
    FaAward,
    FaTools,
    FaGem
} from "react-icons/fa";

const iconMap = {
    Shield: <FaShieldAlt />,
    Leaf: <FaLeaf />,
    Clock: <FaClock />,
    Award: <FaAward />,
    Tools: <FaTools />,
    Gem: <FaGem />
};

export default function WhyChooseUs() {
    return (
        <section id="why-us" className="why-us-section bg-white">
            <div className="container">
                <div className="section-header">
                    <h2>Why Choose Our Experts?</h2>
                    <p>We combine advanced technology with certified professional expertise to deliver unmatched results.</p>
                </div>

                <div className="why-grid">
                    {config.whyChooseUs.map((item, i) => (
                        <div key={i} className="why-card">
                            <div className="why-icon-container">
                                {iconMap[item.icon]}
                            </div>
                            <h3 className="why-card-title">{item.title}</h3>
                            <p className="why-card-text">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
