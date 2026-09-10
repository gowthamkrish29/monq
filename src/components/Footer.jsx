import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, MessageCircle, Globe } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">

                <div className="footer-brand">
                    <h2>MONQ</h2>
                    <p>Sweetness, Reimagined.</p>
                    <div className="footer-socials">
                        <a href="#" aria-label="Instagram"><Camera size={20} /></a>
                        <a href="#" aria-label="Twitter"><MessageCircle size={20} /></a>
                        <a href="#" aria-label="Facebook"><Globe size={20} /></a>
                    </div>
                </div>

                <div className="footer-links-group">
                    <div className="footer-links-col">
                        <h3>Shop</h3>
                        <Link to="/shop">All Products</Link>
                        <Link to="/shop?category=MONK PRO">Proteins</Link>
                        <Link to="/shop?category=MONK CHOCO">Chocolates</Link>
                    </div>

                    <div className="footer-links-col">
                        <h3>About</h3>
                        <Link to="/why-monq">Our Story</Link>
                        <Link to="/investors">Investors</Link>
                        <Link to="/contact">Contact</Link>
                    </div>

                    <div className="footer-links-col">
                        <h3>Support</h3>
                        <a href="#" onClick={(e) => { e.preventDefault(); alert("FAQ page coming soon!"); }}>FAQ</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); alert("Returns policy coming soon!"); }}>Returns</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); alert("Shipping information coming soon!"); }}>Shipping</a>
                    </div>
                </div>

            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} MONQ Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
