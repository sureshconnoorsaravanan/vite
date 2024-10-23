import React from 'react';
import '../styles/home.scss'; 

const Home: React.FC = () => {
    return (
        <div className='home-container'>
            <h1 className='welcome-note'>Welcome to Our E-commerce Store!</h1>
            <p className='welcome-message'>
                Discover amazing products and shop your favorites at the best prices!
            </p>
            <div className="promotional-text">
                <h2>Featured Products</h2>
                <p>
                    Explore our collection of hand-picked items just for you. Whether you're looking for electronics, clothing, or home decor, we have something special for everyone.
                </p>
                <h2>Why Choose Us?</h2>
                <ul>
                    <li>Exclusive Deals & Discounts</li>
                    <li>Quality Assurance on All Products</li>
                    <li>Fast & Reliable Shipping</li>
                    <li>Customer Satisfaction Guarantee</li>
                </ul>
                <p>
                    Start shopping now and enjoy a seamless online shopping experience!
                </p>
            </div>
        </div>
    );
};

export default Home;
