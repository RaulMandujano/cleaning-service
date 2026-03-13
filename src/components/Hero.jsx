import React from "react";
import config from "../config";

export default function Hero() {
    return (
        <section className="hero">
            <div className="container hero-grid">
                <div className="hero-text animate-fade-up">
                    <span className="hero-tag">Certified & Trusted Experts</span>
                    <h1>{config.hero.title}</h1>
                    <p>{config.hero.subtitle}</p>

                    <div className="hero-features">
                        {config.hero.features.map((feature, i) => (
                            <div key={i} className="hero-feature-item">
                                <span className="hero-check">✓</span>
                                {feature}
                            </div>
                        ))}
                    </div>

                    <div className="hero-actions">
                        <button
                            className="btn btn-primary"
                            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                        >
                            {config.hero.buttonText}
                        </button>
                        <button
                            className="btn btn-outline"
                            onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                        >
                            {config.hero.secondaryButtonText}
                        </button>
                    </div>

                    <div className="trust-indicators">
                        {config.hero.trustIndicators.map((item, i) => (
                            <div key={i} className="trust-item">
                                <span>{item.icon}</span>
                                {item.text}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="hero-image animate-fade-up" style={{ animationDelay: '0.2s' }}>
                    <img
                        src="/limpieza profesional.png"
                        alt="Professional restoration and cleaning service"
                    />
                    <div className="experience-card">
                        <div className="exp-icon">🏆</div>
                        <div className="exp-text">
                            {config.hero.experienceStat}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
