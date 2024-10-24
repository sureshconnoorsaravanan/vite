import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import i18n from 'i18next';

// Define the Product interface
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

// Define the initial state type
export interface ProductState {
  categories: string[];
  products: Product[];
  loading: boolean;
  error: string | null;
  language: string;
}

// Initial state
const initialState: ProductState = {
  categories: [],
  products: [],
  loading: false,
  error: null,
  language: 'en', // Default language
};

// Async thunk for fetching categories
export const fetchCategories = createAsyncThunk('products/fetchCategories', async () => {
  const response = await axios.get('https://fakestoreapi.com/products/categories');
  return response.data;
});

// Async thunk for fetching products by category
export const fetchProductsByCategory = createAsyncThunk(
  'products/fetchProductsByCategory',
  async (categoryId: string) => {
    const response = await axios.get(`https://fakestoreapi.com/products/category/${categoryId}`);
    return response.data;
  },
);

// Create the slice
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload; // Update language in state
    },
  },
  extraReducers: builder => {
    // Handle categories fetching
    builder.addCase(fetchCategories.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.loading = false;
      const errorMessage = action.error.message || 'Failed to fetch categories';
      const localizedErrorMessage = i18n.t('error', { error: errorMessage });
      state.error = localizedErrorMessage;
    });

    // Handle products fetching by category
    builder.addCase(fetchProductsByCategory.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchProductsByCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProductsByCategory.rejected, (state, action) => {
      state.loading = false;
      const errorMessage = action.error.message || 'Failed to fetch products by category';
      const localizedErrorMessage = i18n.t('error', { error: errorMessage });
      state.error = localizedErrorMessage;
    });
  },
});

export const { setLanguage } = productSlice.actions;
export default productSlice.reducer;
