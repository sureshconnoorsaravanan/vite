import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchProductsByCategory } from '../redux/slices/products/productSlice';
import { useTranslation } from 'react-i18next';

const ProductList: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { products } = useAppSelector(state => state.products);

  useEffect(() => {
    if (categoryId) {
      dispatch(fetchProductsByCategory(categoryId));
    }
  }, [dispatch, categoryId]);

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        {products.map((product, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3" key={product.id}>
            <div
              className="card mx-1 my-1 p-3"
              role="group"
              aria-labelledby={`product-header-${index}`}
            >
              <div className="text-center">
                <img
                  alt={product.title}
                  src={product.image}
                  style={{ width: '150px', height: '150px' }}
                  className="img-fluid"
                />
              </div>
              <div className="card-body">
                <header>
                  <h6
                    className="product-header text-truncate"
                    id={`product-header-${index}`}
                    tabIndex={0}
                  >
                    {product.title}
                  </h6>
                </header>
                <p className="card-text">
                  <strong>{t('price')}:</strong> ${product.price.toFixed(2)}
                </p>
                <button className="btn btn-warning" aria-label={`Add ${product.title} to cart`}>
                  {t('add-cart')}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
