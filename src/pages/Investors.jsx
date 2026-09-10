import React, { useState } from 'react';
import './Investors.css';

const Investors = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="investors-page">
            {/* Hero Section */}
            <section className="investors-hero">
                <div className="container">
                    <span className="investors-eyebrow">MONQ INC. S1 DECK</span>
                    <h1>Invest in the Future of Sweetness.</h1>
                    <p>Disrupting a ₹11.6 Lakh Crore global sugar market with a scalable, zero-compromise solution powered by Monk Fruit.</p>
                </div>
            </section>

            {/* Data Cards Section */}
            <section className="investors-data">
                <div className="container">
                    <div className="data-cards-grid">

                        <div className="data-card">
                            <h3>Market Opportunity</h3>
                            <div className="data-stat">₹11.6L Cr</div>
                            <p>Global sugar market size. Consumers actively shifting towards zero-sugar alternatives due to health risks.</p>
                        </div>

                        <div className="data-card">
                            <h3>Scalable Brand</h3>
                            <div className="data-stat">76%</div>
                            <p>Gross margin on direct-to-consumer (DTC) channels with high retention and LTV.</p>
                        </div>

                        <div className="data-card">
                            <h3>Product Roadmap</h3>
                            <ul className="roadmap-list">
                                <li>
                                    <span className="phase">Phase 1: 2026 - Validate</span>
                                    DTC launch, core product line, community building.
                                </li>
                                <li>
                                    <span className="phase">Phase 2: 2027 - Expand</span>
                                    Retail distribution (Whole Foods, Erewhon), B2B ingredients.
                                </li>
                                <li>
                                    <span className="phase">Phase 3: 2028 - Scale</span>
                                    Global expansion, proprietary IP pipeline.
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* Pitch Deck Request Form */}
            <section className="investors-contact">
                <div className="container">
                    <div className="pitch-form-container">
                        <h2>Request Full Pitch Deck</h2>
                        <p>For accredited investors, VCs, and Angels.</p>

                        {submitted ? (
                            <div className="form-success">
                                <div className="success-icon-small">✓</div>
                                <h3>Request Received</h3>
                                <p>Our team will reach out to you shortly with the secure data room link.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="pitch-form">
                                <div className="form-group">
                                    <input type="text" placeholder="Full Name" required className="form-input" />
                                </div>
                                <div className="form-group">
                                    <input type="email" placeholder="Work Email" required className="form-input" />
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder="Firm / Organization" required className="form-input" />
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder="LinkedIn URL" className="form-input" />
                                </div>
                                <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                                    Request Access
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Investors;
