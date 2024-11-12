import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the UserState interface
export interface UserState {
  fName: string;
  lName: string;
  password: string;
  email: string;
}

// Initial state
const initialState: UserState = {
  fName: '',
  lName: '',
  password: '',
  email: '',
};

// Create the slice
const userSlice = createSlice({
  name: 'userDetail',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      // Directly mutating state to set user data
      state.fName = action.payload.fName;
      state.lName = action.payload.lName;
      state.password = action.payload.password;
      state.email = action.payload.email;
    },
  },
});

// Export the action and reducer
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
