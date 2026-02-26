import React from "react";
import config from "../config";

export default function EmergencyBanner() {
    const handleCall = () => {
        window.location.href = `tel:${config.phone.replace(/[^0-9]/g, "")}`;
    };

    const handleContact = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="emergency-banner-section bg-white">
            <div className="container">
                <div className="emergency-banner-card">
                    <h2>{config.emergency.title}</h2>
                    <p>{config.emergency.subtitle}</p>
                    <div className="emergency-actions">
                        <button className="btn btn-white" onClick={handleCall}>
                            {config.emergency.primaryButtonText}
                        </button>
                        <button className="btn btn-outline-white" onClick={handleContact}>
                            {config.emergency.secondaryButtonText}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
