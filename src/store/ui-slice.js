import { createSlice } from "@reduxjs/toolkit";

// PRODUCT SLICE
const initialUiState = {
  cartIsVisible: false,
  notification: null,
};

// reducers
const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNoticication(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});
export const uiActions = uiSlice.actions;

export default uiSlice;
