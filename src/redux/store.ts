import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/products/productSlice';
import userReducer from './slices/userDetailslice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    usersData: userReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
