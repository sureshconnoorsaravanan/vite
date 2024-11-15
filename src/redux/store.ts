import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/products/productSlice';
import userReducer from './slices/userDetailslice';
import cartReducer from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    usersData: userReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
