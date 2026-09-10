import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="contact-page">
            <div className="container contact-layout">

                <div className="contact-info">
                    <h1>Get in Touch</h1>
                    <p className="contact-subtext">Have a question about our products, an order, or just want to say hi? We'd love to hear from you.</p>

                    <div className="contact-details">
                        <div className="contact-block">
                            <h3>Email</h3>
                            <p>hello@monq.com</p>
                            <p>support@monq.com</p>
                        </div>

                        <div className="contact-block">
                            <h3>HQ</h3>
                            <p>MONQ Inc.</p>
                            <p>123 Sweetness Ave,<br />San Francisco, CA 94103</p>
                        </div>

                        <div className="contact-block">
                            <h3>Hours</h3>
                            <p>Monday – Friday</p>
                            <p>9:00 AM – 5:00 PM PST</p>
                        </div>
                    </div>
                </div>

                <div className="contact-form-container">
                    {submitted ? (
                        <div className="form-success inline">
                            <h2>Message Sent</h2>
                            <p>Thank you for reaching out. A member of our team will get back to you within 24 hours.</p>
                            <button className="btn-outline mt-4" onClick={() => setSubmitted(false)}>Send Another Message</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" required className="form-input" />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" required className="form-input" />
                            </div>

                            <div className="form-group">
                                <label>Subject</label>
                                <input type="text" required className="form-input" />
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea required className="form-textarea" rows="5"></textarea>
                            </div>

                            <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                                Send Message
                            </button>
                        </form>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Contact;
