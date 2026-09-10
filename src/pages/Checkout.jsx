import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
    const { cartItems, cartSubtotal, closeCart, clearCart } = useCart();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const shippingFee = 100;
    const total = cartSubtotal + shippingFee;

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true);
        clearCart();
        setTimeout(() => {
            setShowModal(false);
            navigate('/');
        }, 4000);
    };

    if (cartItems.length === 0 && !showModal) {
        return (
            <div className="checkout-page empty">
                <div className="container">
                    <h2>Your cart is empty</h2>
                    <p>You need items in your cart to checkout.</p>
                    <Link to="/shop" className="btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>Go to Shop</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="checkout-page">
            <div className="container checkout-layout">

                {/* Left Side: Forms */}
                <div className="checkout-forms">
                    <h1>Checkout</h1>
                    <form id="checkout-form" onSubmit={handleSubmit}>

                        <section className="form-section">
                            <h2>Contact Information</h2>
                            <div className="form-group">
                                <input type="email" placeholder="Email" required className="form-input" />
                            </div>
                            <div className="form-group checkbox-group">
                                <input type="checkbox" id="news" />
                                <label htmlFor="news">Email me with news and offers</label>
                            </div>
                        </section>

                        <section className="form-section">
                            <h2>Shipping Address</h2>
                            <div className="form-row">
                                <div className="form-group">
                                    <input type="text" placeholder="First name (optional)" className="form-input" />
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder="Last name" required className="form-input" />
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Address" required className="form-input" />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Apartment, suite, etc. (optional)" className="form-input" />
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <input type="text" placeholder="City" required className="form-input" />
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder="State" required className="form-input" />
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder="PIN code" required className="form-input" />
                                </div>
                            </div>
                        </section>

                        <section className="form-section">
                            <h2>Payment</h2>
                            <p className="payment-subtext">All transactions are secure and encrypted.</p>

                            <div className="payment-options">
                                <label className="payment-option">
                                    <input type="radio" name="payment" value="upi" defaultChecked />
                                    <span>UPI / QR</span>
                                </label>
                                <label className="payment-option">
                                    <input type="radio" name="payment" value="card" />
                                    <span>Credit / Debit Card</span>
                                </label>
                                <label className="payment-option">
                                    <input type="radio" name="payment" value="cod" />
                                    <span>Cash on Delivery (COD)</span>
                                </label>
                            </div>
                        </section>

                    </form>
                </div>

                {/* Right Side: Order Summary */}
                <div className="checkout-summary">
                    <div className="summary-card">
                        <h2>Order Summary</h2>
                        <div className="summary-items">
                            {cartItems.map(item => (
                                <div className="summary-item" key={item.product.id}>
                                    <div className="summary-item-image">
                                        <img src={item.product.image} alt={item.product.title} />
                                        <span className="summary-item-badge">{item.quantity}</span>
                                    </div>
                                    <div className="summary-item-info">
                                        <h4>{item.product.title}</h4>
                                        <p>{item.product.category}</p>
                                    </div>
                                    <div className="summary-item-price">
                                        ₹{item.product.price * item.quantity}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="summary-totals">
                            <div className="totals-row">
                                <span>Subtotal</span>
                                <span>₹{cartSubtotal}</span>
                            </div>
                            <div className="totals-row">
                                <span>Shipping</span>
                                <span>₹{shippingFee}</span>
                            </div>
                            <div className="totals-row grand-total">
                                <span>Total</span>
                                <span>₹{total}</span>
                            </div>
                        </div>

                        <button type="submit" form="checkout-form" className="btn-primary place-order-btn">
                            Place Order
                        </button>
                    </div>
                </div>
            </div>

            {/* Success Modal */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="success-icon">✓</div>
                        <h2>Order Placed Successfully!</h2>
                        <p>Thank you for choosing MONQ. You will receive an email confirmation shortly.</p>
                        <p>Redirecting to home page...</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Checkout;
