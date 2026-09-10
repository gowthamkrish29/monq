import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Minus, Plus, ChevronDown, ChevronUp, Star } from 'lucide-react';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const product = products.find(p => p.id === id);
    const [quantity, setQuantity] = useState(1);
    const [isZoomed, setIsZoomed] = useState(false);
    const [openAccordions, setOpenAccordions] = useState({
        ingredients: true,
        nutrition: false,
        science: false
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!product) {
            navigate('/shop');
        }
    }, [id, product, navigate]);

    if (!product) return null;

    const handleAddToCart = () => {
        addToCart(product, quantity);
    };

    const toggleAccordion = (section) => {
        setOpenAccordions(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    return (
        <div className="product-detail-page">
            <div className="container">

                {/* Breadcrumbs */}
                <div className="breadcrumbs">
                    <Link to="/">Home</Link> &gt; <Link to="/shop">Shop</Link> &gt; <span>{product.title}</span>
                </div>

                <div className="pdp-layout">
                    {/* Left Side: Sticky Image */}
                    <div className="pdp-image-col">
                        <div className="sticky-image-container" onClick={() => setIsZoomed(true)} style={{ cursor: 'zoom-in' }}>
                            <img src={product.image} alt={product.title} className="pdp-main-image" />
                        </div>
                    </div>

                    {/* Right Side: Details */}
                    <div className="pdp-info-col">

                        <div className="pdp-header">
                            <span className="pdp-category">{product.category}</span>
                            <h1>{product.title}</h1>
                            <div className="pdp-reviews">
                                <div className="stars">
                                    <Star fill="var(--color-dark)" stroke="none" size={16} />
                                    <Star fill="var(--color-dark)" stroke="none" size={16} />
                                    <Star fill="var(--color-dark)" stroke="none" size={16} />
                                    <Star fill="var(--color-dark)" stroke="none" size={16} />
                                    <Star fill="var(--color-dark)" stroke="none" size={16} />
                                </div>
                                <span>4.9 (128 Reviews)</span>
                            </div>
                            <p className="pdp-price">₹{product.price}</p>
                        </div>

                        <p className="pdp-description">{product.description}</p>

                        {/* Visual Health Benefits Badges */}
                        <div className="pdp-badges">
                            {product.benefits.map((benefit, idx) => (
                                <div className="badge" key={idx}>
                                    <div className="badge-icon">✓</div>
                                    <span>{benefit}</span>
                                </div>
                            ))}
                        </div>

                        {/* Add to Cart Block */}
                        <div className="add-to-cart-block">
                            <div className="qty-selector large">
                                <button onClick={() => setQuantity(q => Math.max(1, q - 1))}><Minus size={18} /></button>
                                <span>{quantity}</span>
                                <button onClick={() => setQuantity(q => q + 1)}><Plus size={18} /></button>
                            </div>
                            <button className="btn-primary main-add-btn" onClick={handleAddToCart}>
                                Add to Cart — ₹{product.price * quantity}
                            </button>
                        </div>

                        {/* Accordions */}
                        <div className="pdp-accordions">

                            {/* Ingredients Accordion */}
                            <div className="accordion-item">
                                <button className="accordion-header" onClick={() => toggleAccordion('ingredients')}>
                                    <h3>Full Ingredients List</h3>
                                    {openAccordions.ingredients ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </button>
                                {openAccordions.ingredients && (
                                    <div className="accordion-content">
                                        <p>{(product.ingredients || ['Proprietary organic blend']).join(', ')}</p>
                                    </div>
                                )}
                            </div>

                            {/* Detailed Nutritional Info Accordion */}
                            <div className="accordion-item">
                                <button className="accordion-header" onClick={() => toggleAccordion('nutrition')}>
                                    <h3>Detailed Nutritional Info</h3>
                                    {openAccordions.nutrition ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </button>
                                {openAccordions.nutrition && (
                                    <div className="accordion-content nutrition-panel">
                                        <h4>Nutrition Facts</h4>
                                        <div className="nutrient-row main-row">
                                            <span>Calories</span>
                                            <span>{product.nutritionFacts.calories}</span>
                                        </div>
                                        <div className="nutrient-row">
                                            <span>Total Fat</span>
                                            <span>{product.nutritionFacts.fats}</span>
                                        </div>
                                        <div className="nutrient-row">
                                            <span>Total Carbohydrate</span>
                                            <span>{product.nutritionFacts.carbs}</span>
                                        </div>
                                        <div className="nutrient-row sub-row">
                                            <span>Dietary Fiber</span>
                                            <span>{product.nutritionFacts.dietaryFiber}</span>
                                        </div>
                                        <div className="nutrient-row sub-row">
                                            <span>Total Sugars</span>
                                            <span>{product.nutritionFacts.totalSugar}</span>
                                        </div>
                                        <div className="nutrient-row sub-row highlight">
                                            <span>Includes Added Sugars</span>
                                            <span>{product.nutritionFacts.addedSugar}</span>
                                        </div>
                                        <div className="nutrient-row">
                                            <span>Protein</span>
                                            <span>{product.nutritionFacts.protein}</span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Formulation Science Accordion */}
                            <div className="accordion-item">
                                <button className="accordion-header" onClick={() => toggleAccordion('science')}>
                                    <h3>Formulation Science</h3>
                                    {openAccordions.science ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </button>
                                {openAccordions.science && (
                                    <div className="accordion-content">
                                        <p>Our proprietary formulation utilizes high-grade Monk Fruit extract (Mogroside V) paired with specialized fibers to recreate the exact taste, texture, and browning properties of conventional sugar, without stimulating an insulin response.</p>
                                    </div>
                                )}
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            {/* Image Zoom Modal */}
            {isZoomed && (
                <div className="image-zoom-overlay" onClick={() => setIsZoomed(false)}>
                    <button className="close-zoom-btn" onClick={() => setIsZoomed(false)}>✕</button>
                    <div className="image-zoom-content" onClick={(e) => e.stopPropagation()}>
                        <img src={product.image} alt={product.title} className="zoomed-image" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetail;
