import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addCartItem: (state, action) => {
      let product = action.payload;

      let existingProduct = state.value.find((el) => el._id == product._id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.value.push({ ...product, quantity: 1 });
      }
    },
    clearCartItems: (state, action) => {
      state.value = [];
    },
    removeCartItem: (state, action) => {
      state.value = state.value.filter((el) => el._id !== action.payload);
    },
    setCartItem: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCartItem, addCartItem, clearCartItems, removeCartItem } =
  cartSlice.actions;

export default cartSlice.reducer;
