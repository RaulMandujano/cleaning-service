import React from "react";
import config from "../config";

export default function FinalCTA() {
    const handleCall = () => {
        window.location.href = `tel:${config.phone.replace(/[^0-9]/g, "")}`;
    };

    return (
        <section className="bg-white" style={{ padding: '0 0 100px 0' }}>
            <div className="container">
                <div style={{
                    background: 'var(--primary)',
                    borderRadius: '24px',
                    display: 'grid',
                    gridTemplateColumns: '1.2fr 1fr',
                    overflow: 'hidden',
                    alignItems: 'center'
                }}>
                    <div style={{ padding: '60px', color: 'var(--white)' }}>
                        <h2 style={{ color: 'var(--white)', fontSize: '2.5rem', marginBottom: '20px' }}>
                            Ready to restore your home to its best state?
                        </h2>
                        <p style={{ marginBottom: '32px', opacity: 0.9, fontSize: '1.1rem' }}>
                            Contact the experts for a certified inspection and guaranteed remediation.
                        </p>
                        <button className="btn btn-white" onClick={handleCall}>
                            Call Now: {config.phone}
                        </button>
                    </div>
                    <div style={{ height: '100%' }}>
                        <img
                            src="https://images.unsplash.com/photo-1581578731548-c64695cc6954?auto=format&fit=crop&q=80&w=800"
                            alt="Professional Service"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
