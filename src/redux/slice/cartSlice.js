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
      // console.log("exis prod", existingProduct);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.value.push({ ...product, quantity: 1 });
      }
    },
    clearCartItems: (state, action) => {
      state.value = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCartItem, clearCartItems } = cartSlice.actions;

export default cartSlice.reducer;
