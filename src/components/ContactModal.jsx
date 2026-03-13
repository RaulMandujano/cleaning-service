import React, { useState } from "react";
import config from "../config";

export default function ContactModal({ close }) {
    const [name, setName] = useState("");
    const [service, setService] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = () => {
        const text = `Hello, my name is ${name}.
I am interested in: ${service}.
Message: ${message}`;

        const url = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(
            text
        )}`;

        window.open(url, "_blank");
    };

    return (
        <div className="modal-overlay" onClick={close}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <span className="close-btn" onClick={close}>&times;</span>
                <div className="modal-content">
                    <h2>Contact Us</h2>
                    <div className="form-group">
                        <input
                            className="form-input"
                            placeholder="Your Name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <select className="form-input" onChange={(e) => setService(e.target.value)}>
                            <option>Select Service</option>
                            {config.services.map((s, i) => (
                                <option key={i}>{s.title}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <textarea
                            className="form-input"
                            placeholder="Message"
                            onChange={(e) => setMessage(e.target.value)}
                            rows="4"
                        />
                    </div>
                    <button className="btn btn-primary" style={{ width: '100%', marginBottom: '10px' }} onClick={handleSubmit}>
                        Start WhatsApp Chat
                    </button>
                    <button className="btn btn-secondary" style={{ width: '100%' }} onClick={close}>Close</button>
                </div>
            </div>
        </div>
    );
}
