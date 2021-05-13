import { createSlice, configureStore } from "@reduxjs/toolkit";

import productsStoreReducer from "./auth";

const store = configureStore({
  // config map of reducers
  //
  // reducer: { counter: counterSlice.reducer },
  reducer: {
    products: productsStoreReducer,
  },
});

// export / setup actions below
// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;

export default store;
