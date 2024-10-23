import React from 'react';
import "../styles/footer.scss";

const Footer: React.FC = () => {
    return (
        <footer className='footer-container'>
            <div className='footer-content'>
                <p>&copy; {new Date().getFullYear()} E-commerce Store. All Rights Reserved.</p>
                <div className='footer-links'>
                    <a href='/privacy-policy'>Privacy Policy</a>
                    <a href='/terms-of-service'>Terms of Service</a>
                    <a href='/contact'>Contact Us</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
