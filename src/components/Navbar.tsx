import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosNotifications } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";


const Navbar: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-primary">
            <div className="py-2 d-flex align-items-center justify-content-between container">
                <div className='d-flex align-items-center'>
                    <h3 className='mb-0' style={{cursor:"pointer"}} onClick={()=>navigate("/")}>E-commerce</h3>
                </div>
                <div>
                    <IoIosNotifications color='white' size={25} className='me-2' />
                    <FaShoppingCart color='white' size={20}/>
                </div>
            </div>
        </div>

    );
};

export default Navbar;
