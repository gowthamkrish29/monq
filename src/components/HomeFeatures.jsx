import React, { useState } from 'react';
import { Clock, Beaker, Leaf, ThumbsUp } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const routineSteps = [
    { time: '07:30 AM', title: 'The Morning Fuel', desc: 'MONK CAFE Cold Brew + MONK BREAKFAST Granola. Clean focus, zero glucose spikes.' },
    { time: '01:00 PM', title: 'Post-Workout Push', desc: 'MONK PRO 100% Whey Isolate. 25g protein, 0g added sugar.' },
    { time: '04:30 PM', title: 'The Desk Craving', desc: 'MONK FIZZ Cola + MONK BITES Oat Crunch. Fizzy crunch without the 4 PM crash.' },
    { time: '09:00 PM', title: 'Guilt-Free Nightcap', desc: 'MONK CHOCO 70% Dark or MONK CREAM Ice Cream. Real indulgence, stable overnight fasting blood sugar.' }
];

const sugarItems = [
    { id: 'soda', name: '1 Can Regular Soda', sugar: 39, cal: 150 },
    { id: 'cookie', name: '1 Bakery Cookie', sugar: 28, cal: 240 },
    { id: 'choco', name: '1 Milk Chocolate Bar', sugar: 24, cal: 210 }
];

const cleanLabels = [
    { title: 'Zero Maltodextrin', desc: "Won't spike insulin behind your back." },
    { title: 'Zero Aspartame / Sucralose', desc: 'No synthetic lab molecules or chemical aftertastes.' },
    { title: 'Zero Maltitol', desc: 'No digestive distress or bloating common in standard "sugar-free" candies.' },
    { title: '100% Water-Extracted Mogroside V', desc: 'Pure botanical extraction from high-altitude monk fruit vines.' }
];

const testimonials = [
    { persona: 'The Fitness Coach', user: 'Rahul M.', tag: 'Athlete', text: 'Finding a chocolate whey that doesn\'t taste like fake stevia aftertaste or pack 10g of sugar was impossible until MONK PRO.' },
    { persona: 'The Keto / Metabolic Doctor', user: 'Dr. Ananya S.', tag: 'Doctor', text: 'Monk fruit\'s 0 Glycemic Index makes MONK CHOCO and BITES the first treat I can comfortably recommend to patients monitoring their continuous glucose monitors (CGM).' },
    { persona: 'The Everyday Sweet Tooth', user: 'Priya K.', tag: 'Sweet Tooth', text: 'The MONK CREAM Dutch Chocolate doesn\'t taste \'diet\'. It just tastes like ultra-rich, luxury ice cream.' }
];

const bundles = [
    { name: 'The Fitness Pack', price: '₹2,199', items: 'Includes MONK PRO Whey + 4x MONK BARs + 2x MONK CAFE Cold Brews.', image: 'fitness.jpg' },
    { name: 'The Pantry Swap Box', price: '₹999', items: 'Includes MONK BITES Cookies + MONK CHOCO Dark + MONK SPREAD Hazelnut.', image: 'pantry.jpg' },
    { name: 'The Cold Refreshment Crate', price: '₹599', items: 'Includes 6-Pack Assorted MONK FIZZ (Cola, Lemon-Lime, Orange).', image: 'cold.jpg' }
];

const HomeFeatures = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const { addToCart } = useCart();

    const toggleItem = (id) => {
        setSelectedItems(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    };

    const selectedData = sugarItems.filter(item => selectedItems.includes(item.id));
    const totalConventionalSugar = selectedData.reduce((acc, curr) => acc + curr.sugar, 0);
    const totalEmptyCalories = selectedData.reduce((acc, curr) => acc + curr.cal, 0);

    return (
        <div className="bg-light font-body">
            {/* 1. Day in the Life */}
            <section className="py-20 px-6 container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-heading text-dark mb-4">Day in the Life with MONQ</h2>
                    <p className="text-dark-muted max-w-2xl mx-auto">See how MONQ replaces sugar across your entire day.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                    {/* Subtle connecting line for md and up */}
                    <div className="hidden md:block absolute top-[28px] left-0 w-full h-[2px] bg-[rgba(22,56,40,0.1)] -z-10"></div>
                    {routineSteps.map((step, idx) => (
                        <div key={idx} className="flex flex-col items-start bg-white p-6 rounded-2xl shadow-sm border border-[rgba(22,56,40,0.1)] transition-transform hover:-translate-y-1">
                            <span className="inline-block bg-dark text-light px-3 py-1 rounded-full text-sm font-semibold mb-4">
                                {step.time}
                            </span>
                            <h3 className="font-heading text-xl text-dark mb-2">{step.title}</h3>
                            <p className="text-dark-muted text-sm leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 2. Sugar Impact Calculator */}
            <section className="py-20 px-6 bg-dark">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-heading text-light mb-4">See how much hidden sugar you swap out.</h2>
                        <p className="text-light/80 max-w-2xl mx-auto">Select the conventional items you usually consume to calculate your structural savings with MONQ.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Left Side: Toggles */}
                        <div className="flex flex-col gap-4">
                            {sugarItems.map(item => {
                                const isSelected = selectedItems.includes(item.id);
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => toggleItem(item.id)}
                                        className={`flex items-center justify-between p-6 rounded-2xl border-2 transition-all ${isSelected
                                            ? 'border-light bg-light/10'
                                            : 'border-light/20 hover:border-light/50'
                                            }`}
                                    >
                                        <div className="text-left">
                                            <h4 className="font-heading text-xl text-light">{item.name}</h4>
                                            <p className="text-light/70 text-sm">Conventional: {item.sugar}g added sugar, {item.cal} cal</p>
                                        </div>
                                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-light bg-light' : 'border-light/50'
                                            }`}>
                                            {isSelected && <div className="w-3 h-3 bg-dark rounded-full"></div>}
                                        </div>
                                    </button>
                                )
                            })}
                        </div>
                        {/* Right Side: Live Calculation */}
                        <div className="bg-light p-8 rounded-3xl text-dark flex flex-col justify-between shadow-lg">
                            <div>
                                <h3 className="font-heading text-2xl mb-6 border-b border-dark/10 pb-4">Daily Impact</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-dark-muted">Conventional Added Sugar</span>
                                        <span className="font-bold text-xl">~{totalConventionalSugar}g</span>
                                    </div>
                                    <div className="flex justify-between items-center text-dark font-bold">
                                        <span>MONQ Switch Added Sugar</span>
                                        <span className="text-2xl text-green-700">0g</span>
                                    </div>
                                    <div className="flex justify-between items-center pt-2">
                                        <span className="text-dark-muted">Empty Calories Saved</span>
                                        <span className="font-bold">~{totalEmptyCalories} kcal</span>
                                    </div>
                                    <div className="flex justify-between items-center pt-2 border-t border-dark/10">
                                        <span className="text-dark-muted">Glycemic Impact</span>
                                        <span className="font-bold">0.0 (No Insulin Spike)</span>
                                    </div>
                                </div>
                            </div>
                            <Link to="/shop" className="mt-8 flex justify-center items-center w-full bg-dark text-light py-4 rounded-xl font-bold hover:bg-[#112d20] transition-colors shadow-md">
                                Make the Swap Today — Shop the Starter Pack
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. The Clean Label Standard */}
            <section className="py-20 px-6 container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-heading text-dark mb-4">We Don't Hide Behind Chemical Names.</h2>
                    <p className="text-dark-muted max-w-2xl mx-auto">Flip the box. Compare our botanical standard with typical "diet" alternatives.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cleanLabels.map((lbl, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-[rgba(22,56,40,0.1)] flex flex-col items-start hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-full bg-[rgba(22,56,40,0.05)] text-dark flex items-center justify-center mb-6">
                                <Leaf size={24} />
                            </div>
                            <h3 className="font-heading text-xl text-dark mb-3">{lbl.title}</h3>
                            <p className="text-dark-muted text-sm leading-relaxed">{lbl.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. Taste-Tested by Real Skeptics */}
            <section className="py-20 px-6 bg-[rgba(244,241,234,0.5)]">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-heading text-dark mb-4">Taste-Tested by Real Skeptics</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((test, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-[rgba(22,56,40,0.1)]">
                                <div className="flex gap-1 mb-4 text-dark">
                                    {[...Array(5)].map((_, i) => (
                                        <ThumbsUp key={i} size={16} fill="currentColor" stroke="none" />
                                    ))}
                                </div>
                                <p className="text-dark-muted italic mb-6">"{test.text}"</p>
                                <div>
                                    <p className="font-bold text-dark">{test.user}</p>
                                    <p className="text-sm text-dark-muted font-heading uppercase tracking-wider mt-1">{test.persona}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* 6. Build Your MONQ Routine */}
            <section className="py-20 px-6 container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-heading text-dark mb-4">Build Your MONQ Routine</h2>
                    <p className="text-dark-muted max-w-2xl mx-auto">Curated Starter Bundles</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {bundles.map((bundle, idx) => (
                        <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[rgba(22,56,40,0.1)] flex flex-col transition-transform hover:-translate-y-2 hover:shadow-lg">
                            <div className="h-48 bg-[rgba(22,56,40,0.05)] flex items-center justify-center relative overflow-hidden">
                                {bundle.image ? (
                                    <img src={bundle.image} alt={bundle.name} className="w-full h-full object-cover" />
                                ) : (
                                    <span className="text-dark/30 font-heading tracking-widest text-lg uppercase px-6">{bundle.name} Placeholder</span>
                                )}
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex justify-between items-start mb-4 gap-4">
                                    <h3 className="font-heading text-2xl text-dark leading-tight">{bundle.name}</h3>
                                    <span className="font-bold text-dark text-lg whitespace-nowrap">{bundle.price}</span>
                                </div>
                                <p className="text-dark-muted text-sm mb-8 flex-1">{bundle.items}</p>
                                <button
                                    onClick={() => {
                                        const numericPrice = parseInt(bundle.price.replace(/[^\d]/g, ''), 10);
                                        addToCart({
                                            id: bundle.name,
                                            name: bundle.name,
                                            price: numericPrice,
                                            image: bundle.image
                                        }, 1);
                                    }}
                                    className="w-full btn-outline border-dark text-dark hover:bg-dark hover:text-light transition-all rounded-xl py-3 font-semibold group flex items-center justify-center gap-2"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HomeFeatures;
