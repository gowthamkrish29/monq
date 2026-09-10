import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import './Shop.css';

const Shop = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const location = useLocation();
    const { addToCart } = useCart();
    const categories = ['All', ...new Set(products.map(p => p.category))];

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const categoryParam = queryParams.get('category');
        if (categoryParam && categories.includes(categoryParam)) {
            setActiveCategory(categoryParam);
        } else {
            setActiveCategory('All');
        }
    }, [location]);

    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <div className="shop-page">
            <div className="shop-header">
                <div className="container">
                    <h1>Shop All Formulations</h1>
                    <p>Discover the future of sweetness without compromise.</p>
                </div>
            </div>

            <div className="container shop-layout">
                {/* Sidebar Filters */}
                <aside className="shop-sidebar">
                    <h3>Categories</h3>
                    <ul className="category-filters">
                        {categories.map(category => (
                            <li key={category}>
                                <button
                                    className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                                    onClick={() => setActiveCategory(category)}
                                >
                                    {category}
                                </button>
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Product Grid */}
                <div className="shop-main">
                    <div className="shop-stats">
                        <p>Showing {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''}</p>
                    </div>

                    <div className="products-grid">
                        {filteredProducts.map(product => (
                            <div className="product-card" key={product.id}>
                                <Link to={`/shop/${product.id}`} className="product-image-link">
                                    <img src={product.image} alt={product.title} loading="lazy" />
                                </Link>
                                <div className="product-info">
                                    <div className="product-meta">
                                        <span className="product-category">{product.category}</span>
                                        <span className="product-price">₹{product.price}</span>
                                    </div>
                                    <h3><Link to={`/shop/${product.id}`}>{product.title}</Link></h3>
                                    <p className="product-flavor">{product.flavor}</p>
                                    <button className="btn-primary add-to-cart-btn" onClick={() => addToCart(product)}>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <div className="no-products">
                            <h2>No products found</h2>
                            <p>Try selecting a different category.</p>
                            <button className="btn-primary mt-4" onClick={() => setActiveCategory('All')}>
                                View All Products
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Shop;
