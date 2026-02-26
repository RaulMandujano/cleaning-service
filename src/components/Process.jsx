import React from "react";
import config from "../config";
import {
    FaSearch,
    FaLock,
    FaTrashAlt,
    FaCheckCircle,
    FaArrowRight
} from "react-icons/fa";

const stepIcons = {
    Search: <FaSearch />,
    Lock: <FaLock />,
    Trash: <FaTrashAlt />,
    Check: <FaCheckCircle />
};

export default function Process() {
    return (
        <section id="process" className="process-section bg-light">
            <div className="container">
                <div className="section-header">
                    <h2>{config.process.title}</h2>
                    <p>{config.process.subtitle}</p>
                </div>

                <div className="process-grid-modern">
                    {config.process.steps.map((step, i) => (
                        <div key={i} className="process-card-modern">
                            <div className="process-badge">
                                <FaCheckCircle className="badge-icon" />
                            </div>
                            <div className="process-icon-circle">
                                {stepIcons[step.icon]}
                            </div>
                            <div className="process-step-label">Step {step.step}</div>
                            <h3 className="process-step-title">{step.title}</h3>
                            <p className="process-step-desc">{step.description}</p>
                            {i < 3 && <FaArrowRight className="process-arrow" />}
                        </div>
                    ))}
                </div>

                <div className="process-cta">
                    <button
                        className="btn btn-primary btn-lg"
                        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    >
                        {config.process.buttonText}
                    </button>
                </div>
            </div>
        </section>
    );
}
