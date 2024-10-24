import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchCategories } from '../redux/slices/products/productSlice';

const CategoryTab: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryClick = (item: string) => {
    navigate("list/" + encodeURIComponent(item));
  };

  return (
    <div className="container mt-2">
      <h4>Select Category:</h4>
      <div className="d-flex flex-wrap" role="group" aria-label="Category selection">
        {categories.map((item, index) => (
          <button
            className="btn btn-secondary mx-2 text-capitalize"
            key={index}
            onClick={() => handleCategoryClick(item)}
            aria-label={`Select ${item} category`}
            tabIndex={0}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTab;
