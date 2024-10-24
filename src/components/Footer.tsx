import React from 'react';
import "../styles/footer.scss";

const Footer: React.FC = () => {
    return (
        <footer className="footer-container" aria-label="Footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} E-commerce Store. All Rights Reserved.</p>
                <div className="footer-links">
                    <a href="/" aria-label="Privacy Policy">Privacy Policy</a>
                    <a href="/" aria-label="Terms of Service">Terms of Service</a>
                    <a href="/" aria-label="Contact Us">Contact Us</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
