import { createSlice, current } from "@reduxjs/toolkit";

// PRODUCT SLICE
const initialCartState = {
  cartItems: [
    {
      title: "Test",
      price: 6,
      total: 18,
      quantity: 3,
    },
  ],
  totalAmount: 18,
};

// reducers
const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    // one to add from ID
    addProduct(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.title === newItem.title
      );
      if (existingItem) {
        state.cartItems = state.cartItems.push(newItem);
        console.log("existing", current(state.cartItems));
      }
      // console.log(action.payload);

      // state.cartItems = state.cartItems.push(action.payload);

      // const existingCartItemsIndex = state.cartItems.findIndex(
      //   (item) => item.id === action.item.id
      // );
    },
    // one to take away from ID

    // one to total shit up
  },
});
export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
