import { createSlice } from "@reduxjs/toolkit";

// PRODUCT SLICE
const initialCartState = {
  cartItems: [
    {
      title: "Test",
      price: 6,
      description: "This is a first product - amazing!",
      amount: 3,
    },
  ],
  totalAmount: 18,
};

// reducers
const cartSlice = createSlice({
  name: "cartItems",
  initialState: initialCartState,
  reducers: {
    addProduct(state, action) {
      state.products = state.products.push(action.payload);
    },
  },
});
export const productActions = cartSlice.actions;

export default cartSlice.reducer;
