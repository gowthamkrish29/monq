import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const { cartCount, toggleCart } = useCart();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">

                {/* Mobile Menu Toggle */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Logo */}
                <Link to="/" className="navbar-brand">
                    MONQ
                </Link>

                {/* Desktop Links */}
                <div className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                    <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                    <Link to="/shop" className={location.pathname === '/shop' ? 'active' : ''}>Shop</Link>
                    <Link to="/why-monq" className={location.pathname === '/why-monq' ? 'active' : ''}>Why MONQ</Link>
                    <Link to="/investors" className={location.pathname === '/investors' ? 'active' : ''}>Investors</Link>
                    <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
                </div>

                {/* Icons */}
                <div className="navbar-icons">
                    <button aria-label="Search" onClick={() => alert("Search functionality coming soon!")}>
                        <Search size={20} />
                    </button>
                    <button aria-label="Account" onClick={() => alert("User profile portal coming soon!")}>
                        <User size={20} />
                    </button>
                    <button aria-label="Cart" onClick={toggleCart} className="cart-btn">
                        <ShoppingBag size={20} />
                        {cartCount > 0 && <span className="cart-bubble">{cartCount}</span>}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
