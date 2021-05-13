import { createSlice } from "@reduxjs/toolkit";

// PRODUCT SLICE
const initialProductState = {
  products: [{}],
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
export const authActions = productSlice.actions;

export default productSlice.reducer;
