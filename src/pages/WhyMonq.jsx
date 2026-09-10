import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ShieldCheck, Smile, Activity } from 'lucide-react';
import './WhyMonq.css';

const WhyMonq = () => {
    return (
        <div className="whymonq-page">

            {/* 1. Hero Banner */}
            <section className="why-hero">
                <div className="container">
                    <span className="why-eyebrow">THE MONQ PHILOSOPHY</span>
                    <h1>Why Settle for Sacrifices?</h1>
                    <p>Most "healthy" alternatives ask you to choose between clean nutrition and authentic indulgence. We engineered MONQ so you never have to make that trade-off again.</p>
                    <Link to="/shop" className="btn-primary">Explore Products</Link>
                </div>
            </section>

            {/* 2. Section 1: The Core Value Pillars */}
            <section className="why-pillars">
                <div className="container">
                    <div className="pillars-grid">

                        <div className="pillar-card">
                            <div className="pillar-icon"><Smile size={36} /></div>
                            <h3>Real Craving Satisfaction</h3>
                            <p>Traditional diet products often taste artificial or bland. MONQ is formulated by food scientists to preserve the rich mouthfeel of chocolate, the snap of a cookie, and the creaminess of ice cream.</p>
                        </div>

                        <div className="pillar-card">
                            <div className="pillar-icon"><Zap size={36} /></div>
                            <h3>Steady Energy, Zero Crash</h3>
                            <p>Conventional added sugar creates sharp glucose spikes followed by mid-day energy crashes. MONQ’s monk-fruit formulations deliver pure sweetness with zero glycemic impact.</p>
                        </div>

                        <div className="pillar-card">
                            <div className="pillar-icon"><Activity size={36} /></div>
                            <h3>100% Plant-Derived</h3>
                            <p>Unlike sucralose, aspartame, or saccharin cooked up in chemical labs, our sweetness comes directly from mogrosides extracted from high-altitude monk fruit.</p>
                        </div>

                        <div className="pillar-card">
                            <div className="pillar-icon"><ShieldCheck size={36} /></div>
                            <h3>Gut-Friendly & Clean Label</h3>
                            <p>Many "sugar-free" snacks use cheap sugar alcohols (like high-dose maltitol) that cause digestive discomfort. MONQ prioritizes digestive comfort and transparent ingredients.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* 3. Head-to-Head Comparison Matrix */}
            <section className="competition-matrix">
                <div className="container">
                    <h2>The Sweetness Benchmark</h2>
                    <div className="table-responsive">
                        <table className="comparison-table">
                            <thead>
                                <tr>
                                    <th>Criteria</th>
                                    <th>Conventional Sugar</th>
                                    <th>Artificial Sweeteners</th>
                                    <th>Stevia Brands</th>
                                    <th className="highlight-col">MONQ (Monk Fruit)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Added Sugar</td>
                                    <td>High (~4 kcal/g)</td>
                                    <td>0g</td>
                                    <td>0g</td>
                                    <td className="highlight-col">0g Added Sugar</td>
                                </tr>
                                <tr>
                                    <td>Glycemic Impact</td>
                                    <td>Spikes Blood Sugar</td>
                                    <td>None</td>
                                    <td>None</td>
                                    <td className="highlight-col">Zero Spike (0 GI)</td>
                                </tr>
                                <tr>
                                    <td>Aftertaste</td>
                                    <td>Familiar / Sweet</td>
                                    <td>Chemical / Metallic</td>
                                    <td>Bitter / Licorice-like</td>
                                    <td className="highlight-col">Clean, Pure Sweetness</td>
                                </tr>
                                <tr>
                                    <td>Source</td>
                                    <td>Heavily Refined Cane</td>
                                    <td>Synthetic Lab Chemicals</td>
                                    <td>Plant (Leaves)</td>
                                    <td className="highlight-col">Whole Botanical Fruit</td>
                                </tr>
                                <tr>
                                    <td>Digestive Comfort</td>
                                    <td>Inflammatory in excess</td>
                                    <td>Often disrupts gut flora</td>
                                    <td>Generally mild</td>
                                    <td className="highlight-col">Naturally Gentle on Gut</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 4. The Science of Mogrosides */}
            <section className="mogroside-science">
                <div className="container">
                    <div className="science-layout">
                        <div className="science-text">
                            <h2>Sweetness Without the Sugar Molecule</h2>
                            <p>In traditional foods, sweetness is bound to caloric sugars (sucrose and fructose). Monk fruit is biologically unique: its sweetness comes from mogrosides, potent antioxidant compounds that are up to 150–250x sweeter than sugar by weight.</p>

                            <div className="key-fact-callout">
                                <strong>Key Fact:</strong> Because mogrosides are metabolized differently by your body, they pass through without being absorbed as calories or blood sugar, delivering pure sweetness without caloric baggage.
                            </div>
                        </div>

                        <div className="science-illustration">
                            <div className="illustration-card">
                                <div className="diagram-node">Mogroside V</div>
                                <div className="diagram-arrows">↓</div>
                                <div className="diagram-result">0 Calories<br />0 Glycemic Index</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Who Is MONQ For? */}
            <section className="audience-section">
                <div className="container">
                    <h2>Formulated For Your Lifestyle</h2>

                    <div className="audience-grid">
                        <div className="audience-card">
                            <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Fitness Athlete" />
                            <div className="audience-info">
                                <h3>The Fitness Athlete</h3>
                                <p>High-protein, zero-added-sugar fuel (MONK PRO) that keeps macros dialed in without craving slip-ups.</p>
                            </div>
                        </div>

                        <div className="audience-card">
                            <img src="https://images.unsplash.com/photo-1499540633125-484965b60031?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Everyday Snacker" />
                            <div className="audience-info">
                                <h3>The Mindful Everyday Snacker</h3>
                                <p>Guilt-free chocolate bars and cookies (MONK CHOCO & MONK BITES) for work breaks and dessert cravings.</p>
                            </div>
                        </div>

                        <div className="audience-card">
                            <img src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Low Carb Lifestyle" />
                            <div className="audience-info">
                                <h3>Diabetic & Low-Carb Lifestyles</h3>
                                <p>Safe, keto-friendly formulation that satisfies sweet tooth cravings without worrying about insulin spikes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Bottom CTA */}
            <section className="why-bottom-cta">
                <div className="container">
                    <h2>Experience the Upgrade for Yourself.</h2>
                    <p>Better ingredients. Uncompromised taste. Zero added sugar.</p>
                    <Link to="/shop" className="btn-primary large-button">Start Shopping MONQ</Link>
                </div>
            </section>

        </div>
    );
};

export default WhyMonq;
