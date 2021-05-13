import { createSlice } from "@reduxjs/toolkit";

// PRODUCT SLICE
const initialProductState = {
  products: [
    {
      title: "Test",
      price: 6,
      description: "This is a first product - amazing!",
    },
    {
      title: "Cat",
      price: 22,
      description: "Buy this cat",
    },
  ],
};

// reducers
const productSlice = createSlice({
  name: "products",
  initialState: initialProductState,
  reducers: {
    addProduct(state, action) {
      state.products = state.products.push(action.payload);
    },
  },
});
export const productActions = productSlice.actions;

export default productSlice.reducer;
