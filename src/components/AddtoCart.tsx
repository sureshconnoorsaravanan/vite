import React,{useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../redux/slices/cartSlice';
import { cartReducer } from '../redux/store'; // You will need to define this type in your store file
import { useTranslation } from 'react-i18next';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
const [AddCartProduct, setAddCartProduct] = useState<any>(null)
  // Select the items from the Redux store state
  const cartItems = useSelector((state: cartReducer) => { console.log("aadsd",state); return state.cart.items});
console.log("aartiiii",cartItems)
  // Dispatch actions
useEffect(() => {
  setAddCartProduct(cartItems)
}, [cartItems])

  const handleRemoveItem = (itemId: string) => {
    dispatch(removeFromCart(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (


        // <ul>
        //   {cartItems.map((item) => (
        //     <li key={item.id}>
        //       <p>{item.name} x {item.quantity}</p>
        //       <p>${(item.price * item.quantity).toFixed(2)}</p>
        //       <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
        //     </li>
        //   ))}
        // </ul>


        <div className="container mt-5 mb-5">
      <div className="row">
         { AddCartProduct && AddCartProduct.map((product: any, index : any) => (
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
                <button className="btn btn-warning" aria-label={`Add ${product.title} to cart`} 
                // onClick={()=>{addToCartClick(product)}}
                >
                  {t('Buy Now')}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    )
    }
      <div>
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <button onClick={()=>{handleClearCart}}>Clear Cart</button>
      </div>

    </div>
  );
};

export default Cart;
