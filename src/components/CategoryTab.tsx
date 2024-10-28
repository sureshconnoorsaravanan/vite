import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchCategories } from '../redux/slices/products/productSlice';
import LanguageSwitch from './LanguageSwitch/LanguageSwitch';
import { useTranslation } from 'react-i18next';
import '../styles/categoryTab.scss';

const CategoryTab: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { categories } = useAppSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryClick = (item: string) => {
    navigate('list/' + encodeURIComponent(item));
  };

  return (
    <div className="category-tab-container">
      <div className="category-header">
        <h4 className="category-title">{t('category')}</h4>
        <LanguageSwitch />
      </div>
      <div className="category-buttons" role="group" aria-label="Category selection">
        {categories.map((item, index) => (
          <button
            className="category-button"
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
