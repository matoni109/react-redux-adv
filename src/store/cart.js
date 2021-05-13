import { createSlice } from "@reduxjs/toolkit";

// PRODUCT SLICE
const initialCartState = {
  cartItems: [
    {
      title: "Test",
      price: 7,
      total: 18,
      quantity: 3,
    },
  ],
  totalAmount: 18,
};

// reducers
const cartSlice = createSlice({
  name: "cartItems",
  initialState: initialCartState,
  reducers: {
    // one to add
    addProduct(state, action) {
      state.cartItems = state.cartItems.push(action.payload);
    },
    // one to take away

    // one to total shit up
  },
});
export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
