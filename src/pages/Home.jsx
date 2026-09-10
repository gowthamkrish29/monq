import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Flame, Heart, Droplets } from 'lucide-react';
import HomeFeatures from '../components/HomeFeatures';
import './Home.css';

const Home = () => {
    const [sliderValue, setSliderValue] = useState(50);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>SWEETNESS, REIMAGINED.</h1>
                    <p>Everyday foods. Extraordinary sweetness. Powered by monk fruit.</p>
                    <div className="hero-cta">
                        <Link to="/shop" className="btn-primary">Shop Products</Link>
                        <Link to="/investors" className="btn-outline">Investor Deck</Link>
                    </div>
                </div>
            </section>

            {/* Section 2: Meet Monk Fruit (The Science) */}
            <section className="science-section">
                <div className="container">
                    <div className="science-layout">
                        <div className="science-image">
                            <img src="monk-fruit.jpg" alt="Fresh organic Monk Fruit on vine" />
                        </div>
                        <div className="science-text">
                            <h2>The Secret is in the Vine.</h2>
                            <p className="science-intro">
                                Used for centuries in traditional Eastern wellness, Monk Fruit (Luo Han Guo) is a small green melon native to Southeast Asia. Unlike conventional sugar, its intense sweetness doesn't come from fructose or sucrose, but from naturally occurring antioxidants called mogrosides.
                            </p>

                            <div className="process-steps">
                                <div className="process-step">
                                    <div className="step-icon">1</div>
                                    <div className="step-content">
                                        <h4>Harvest</h4>
                                        <p>Sustainably sourced from high-altitude vines.</p>
                                    </div>
                                </div>
                                <div className="process-step">
                                    <div className="step-icon">2</div>
                                    <div className="step-content">
                                        <h4>Steep</h4>
                                        <p>Crushed and steeped in pure water to extract the natural sweetness.</p>
                                    </div>
                                </div>
                                <div className="process-step">
                                    <div className="step-icon">3</div>
                                    <div className="step-content">
                                        <h4>Formulate</h4>
                                        <p>Expertly blended into our foods without harsh chemical processing.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Imported HomeFeatures Component */}
            <HomeFeatures />

            {/* Section 1: The Problem (Hook) */}
            <section className="problem-section">
                <div className="container">
                    <div className="problem-content">
                        <h2>The world doesn't want less flavor. <br /> It wants less sugar.</h2>
                        <p>
                            Traditional sugar is deeply embedded in the foods we crave most—from morning coffee and protein shakes to evening desserts. But consumers shouldn't have to choose between their health and their favorite foods. MONQ bridges the gap by redesigning classic formulations without the sugar spike.
                        </p>
                    </div>
                </div>
            </section>


            {/* Section 3: The MONQ Benefits (Icon Grid) */}
            <section className="benefits-section">
                <div className="container">
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <div className="benefit-icon"><Leaf size={32} /></div>
                            <h3>Zero Added Sugar.</h3>
                            <p>All the sweetness, none of the sugar crash.</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon"><Flame size={32} /></div>
                            <h3>Zero Calories & 0 GI.</h3>
                            <p>Perfect for keto, diabetic, and low-carb lifestyles.</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon"><Heart size={32} /></div>
                            <h3>100% Plant-Based.</h3>
                            <p>Derived directly from the fruit. No artificial chemicals like aspartame or sucralose.</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon"><Droplets size={32} /></div>
                            <h3>Clean Taste.</h3>
                            <p>Formulated to eliminate the bitter aftertaste associated with Stevia and other alternatives.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: The Sugar Swap */}
            <section className="sugar-swap-section">
                <div className="container">
                    <div className="sugar-swap-content">
                        <h2>What if we swapped the sweetness?</h2>

                        <div className="swap-visuals">
                            <div className="swap-card conventional" style={{ opacity: 1 - (sliderValue / 100) }}>
                                <h3>Conventional Formulation</h3>
                                <div className="swap-stats">
                                    <div className="stat">High Calories</div>
                                    <div className="stat">High Sugar</div>
                                    <div className="stat">Spikes Blood Glucose</div>
                                    <div className="stat">Empty Carbs</div>
                                </div>
                            </div>

                            <div className="slider-container">
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={sliderValue}
                                    onChange={(e) => setSliderValue(e.target.value)}
                                    className="swap-slider"
                                    aria-label="Sugar Swap Slider"
                                />
                                <div className="slider-label">Slide to experience the difference</div>
                            </div>

                            <div className="swap-card monq-formulation" style={{ opacity: sliderValue / 100 }}>
                                <h3>MONQ Formulation</h3>
                                <div className="swap-stats">
                                    <div className="stat">Calorie-Optimized</div>
                                    <div className="stat">0g Added Sugar</div>
                                    <div className="stat">Stable Blood Sugar</div>
                                    <div className="stat">Functional Ingredients</div>
                                </div>
                            </div>
                        </div>

                        <p className="swap-description">
                            We don't just replace sugar 1:1. We re-engineer the entire recipe—balancing texture, moisture, and browning to ensure your favorite cookies and chocolates taste exactly how you remember them.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 5: Explore the MONQ Universe (Product Teaser) */}
            <section className="categories-section">
                <div className="container">
                    <h2>Same cravings. Smarter sweetness.</h2>

                    <div className="categories-scroll">
                        <Link to="/shop?category=MONK PRO" className="category-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')` }}>
                            <div className="category-overlay"></div>
                            <h3>MONK PRO</h3>
                            <p>100% Whey Isolate</p>
                        </Link>
                        <Link to="/shop?category=MONK BITES" className="category-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')` }}>
                            <div className="category-overlay"></div>
                            <h3>MONK BITES</h3>
                            <p>Premium Cookies</p>
                        </Link>
                        <Link to="/shop?category=MONK CHOCO" className="category-card" style={{ backgroundImage: `url('dutch.jpeg')` }}>
                            <div className="category-overlay"></div>
                            <h3>MONK CHOCO</h3>
                            <p>Guilt-Free Chocolate</p>
                        </Link>
                        <Link to="/shop?category=MONK CREAM" className="category-card" style={{ backgroundImage: `url('pistachio.jpeg')` }}>
                            <div className="category-overlay"></div>
                            <h3>MONK CREAM</h3>
                            <p>Craft Ice Cream</p>
                        </Link>
                        <Link to="/shop?category=MONK FIZZ" className="category-card" style={{ backgroundImage: `url('orange.jpeg')` }}>
                            <div className="category-overlay"></div>
                            <h3>MONK FIZZ</h3>
                            <p>Zero-Sugar Sodas</p>
                        </Link>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <Link to="/shop" className="btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.2rem' }}>
                            Shop All Products
                        </Link>
                    </div>
                </div>
            </section>

            {/* Section 6: Final CTA */}
            <section className="final-cta-section">
                <div className="container">
                    <div className="final-cta-content">
                        <h2>The Next Generation of Food is Here.</h2>
                        <p>Whether you want to upgrade your pantry or invest in the future of food-tech, MONQ is leading the revolution against conventional sugar.</p>
                        <div className="final-cta-buttons">
                            <Link to="/shop" className="btn-primary">Shop The Collection</Link>
                            <Link to="/investors" className="btn-outline">Request Investor Deck</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
