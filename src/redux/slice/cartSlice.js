import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addCartItem: (state, action) => {
      state.value.push(action.payload);
    },
    clearCartItems: (state, action) => {
      state.value = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCartItem, clearCartItems } = cartSlice.actions;

export default cartSlice.reducer;
