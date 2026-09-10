import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import './CartDrawer.css';

const CartDrawer = () => {
    const { isCartOpen, closeCart, cartItems, updateQuantity, removeFromCart, cartSubtotal } = useCart();

    useEffect(() => {
        if (isCartOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isCartOpen]);

    return (
        <>
            <div
                className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
                onClick={closeCart}
            />
            <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
                <div className="cart-header">
                    <h2>Your Cart</h2>
                    <button onClick={closeCart} className="close-cart-btn" aria-label="Close cart">
                        <X size={24} />
                    </button>
                </div>

                <div className="cart-items">
                    {cartItems.length === 0 ? (
                        <div className="empty-cart">
                            <p>Your cart is empty.</p>
                            <button className="btn-primary" onClick={closeCart}>Continue Shopping</button>
                        </div>
                    ) : (
                        cartItems.map(item => (
                            <div key={item.product.id} className="cart-item">
                                <img src={item.product.image} alt={item.product.title} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <span className="cart-item-category">{item.product.category}</span>
                                    <h3 className="cart-item-title">{item.product.title}</h3>
                                    <div className="cart-item-controls">
                                        <div className="qty-selector">
                                            <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} disabled={item.quantity <= 1}>
                                                <Minus size={14} />
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>
                                                <Plus size={14} />
                                            </button>
                                        </div>
                                        <span className="cart-item-price">₹{item.product.price * item.quantity}</span>
                                    </div>
                                </div>
                                <button
                                    className="remove-item-btn"
                                    onClick={() => removeFromCart(item.product.id)}
                                    aria-label="Remove item"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="cart-footer">
                        <div className="cart-subtotal">
                            <span>Subtotal</span>
                            <span>₹{cartSubtotal}</span>
                        </div>
                        <p className="cart-taxes">Taxes and shipping calculated at checkout</p>
                        <Link to="/checkout" className="btn-primary checkout-btn" onClick={closeCart}>
                            Proceed to Checkout
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
};

export default CartDrawer;
