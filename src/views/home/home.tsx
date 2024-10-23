import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchCategories } from '../../redux/slices/products/productSlice';

const Home: React.FC = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { categories } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryClick=(item:string)=>{
    navigate("list/"+encodeURI(item))
  }

  
  return (
    <div className='container mt-5'>
      <div className='d-flex'>
        <h4>Select Category:</h4>
        <div>
          {categories.map((item, index) => (
            <button className='btn btn-secondary mx-2 text-capitalize' key={index + 1} onClick={()=>handleCategoryClick(item)}>{item}</button>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
