import React from 'react';
import webImage from "../../assets/product_list.png";

const Navbar: React.FC = () => {

    return (
        <div className="bg-info">
        <div className="py-2 d-flex align-items-center justify-content-between container">
            <h1>E-commerce Website</h1>
            <div>
            <img 
                src={webImage} 
                width={30} 
                height={30} 
                alt="List of Products" 
                className="me-3" 
                aria-hidden="true" 
            />
            </div>
        </div>
        </div>

    );
};

export default Navbar;