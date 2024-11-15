import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the type for a cart item
interface CartItem {
  id: string; // Assuming each item has a unique string ID
  name: string; // You can add more fields as necessary
  price: number;
  quantity: number;
}

// Define the type for the cart state
interface CartState {
  items: CartItem[];
}

// Initial state with an empty cart
const initialState: CartState = {
  items: [],
};

// Create the cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Action to add an item to the cart
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === newItem.id);
      
      if (itemIndex >= 0) {
        // If item exists, increase its quantity
        state.items[itemIndex].quantity += 1;
      } else {
        // If item doesn't exist, add it to the cart
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    // Action to remove an item from the cart
    removeFromCart: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      state.items = state.items.filter(item => item.id !== itemId);
    },
    // Action to clear the cart
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Export actions and reducer
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
