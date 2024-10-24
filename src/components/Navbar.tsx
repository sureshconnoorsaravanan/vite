import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosNotifications } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const inStyle= {
    background: 'none',
    border: 'none'
}

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleKeyDown = (e: React.KeyboardEvent<HTMLHeadingElement>) => {
        if (e.key === 'Enter') {
            navigate("/");
        }
    };

    return (
        <div className="bg-info" aria-label="Main Navigation"> 
            <div className="py-2 d-flex align-items-center justify-content-between container">
                <div className='d-flex align-items-center'>
                    <h3 
                        className='mb-0 text-dark'  
                        style={{ cursor: "pointer" }}
                        aria-label="Go to Home Page" 
                        onClick={() => navigate("/")}
                        tabIndex={0}
                        onKeyDown={handleKeyDown}  
                    >
                        {t('app-title')}
                    </h3>
                </div>
                <div>
                    <button 
                        aria-label="View notifications" 
                        className="btn-icon"
                        style={inStyle}
                    >
                        <IoIosNotifications color="white" size={25} className="me-2" />
                    </button>
                    <button 
                        aria-label="View shopping cart" 
                        className="btn-icon"
                        style={inStyle}
                    >
                        <FaShoppingCart color="white" size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
