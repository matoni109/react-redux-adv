import { createSlice } from "@reduxjs/toolkit";

// PRODUCT SLICE
const initialProductState = {
  products: [
    {
      title: "Dog",
      price: 6,
      description: "Buy your best friend today!!",
    },
    {
      title: "Cat",
      price: 22,
      description: "Buy this cat.. meow..",
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
