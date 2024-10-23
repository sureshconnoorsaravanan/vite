import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the Product interface
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

// Define the initial state type
interface ProductState {
  categories: string[];
  products: Product[];
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: ProductState = {
  categories: [],
  products: [],
  loading: false,
  error: null,
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
  }
);

// Create the slice
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle categories fetching
    builder.addCase(fetchCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state) => {
      state.loading = false;
      state.error = 'Failed to fetch categories';
    });

    // Handle products fetching by category
    builder.addCase(fetchProductsByCategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProductsByCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProductsByCategory.rejected, (state) => {
      state.loading = false;
      state.error = 'Failed to fetch products by category';
    });
  },
});

export default productSlice.reducer;
