import { createSlice, configureStore } from "@reduxjs/toolkit";

import productsStoreReducer from "./products";
import cartItemsReducer from "./cart";
import uiReducer from "./ui-slice";

const store = configureStore({
  // config map of reducers
  //
  // reducer: { counter: counterSlice.reducer },
  reducer: {
    products: productsStoreReducer,
    cartItems: cartItemsReducer,
    ui: uiReducer.reducer,
  },
});

// export / setup actions below
// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;

export default store;
