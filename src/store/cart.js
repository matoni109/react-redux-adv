import { createSlice, current } from "@reduxjs/toolkit";

// PRODUCT SLICE
const initialCartState = {
  cartItems: [],
  totalAmount: 18,
};

// reducers  paul@bjselec.com.auss
const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    // one to add from ID
    addProduct(state, action) {
      const newItem = action.payload;
      // console.log(action.payload);
      const existingItem = state.cartItems.find(
        (item) => item.title === newItem.title
      );
      if (!existingItem) {
        // don't use ==
        state.cartItems.push({
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          total: newItem.price,
        });
        // console.log("updated new listing", current(state));
      } else {
        // find_index
        const itemIndex = state.cartItems.findIndex(
          (item) => item.title === newItem.title
        );
        // console.log(itemIndex);
        // select item
        const selectedItem = state.cartItems[itemIndex];
        //
        const newQty = selectedItem.quantity + 1;
        const newTotal = selectedItem.total + selectedItem.price;

        state.cartItems[itemIndex] = {
          ...newItem, // keeps other items in the object
          quantity: newQty,
          total: newTotal,
        };

        // console.log("updated existing", current(state));
      }
    },
    // one to take away from ID
    removeProduct(state, action) {
      const newItem = action.payload;
      // console.log(action.payload);
      const existingItem = state.cartItems.find(
        (item) => item.title === newItem.title
      );
      if (existingItem) {
        // find_index
        const itemIndex = state.cartItems.findIndex(
          (item) => item.title === newItem.title
        );
        // console.log(itemIndex);
        // select item
        const selectedItem = state.cartItems[itemIndex];
        //
        const newQty = selectedItem.quantity - 1;
        const newTotal = selectedItem.total - selectedItem.price;

        if (newQty > 0) {
          state.cartItems[itemIndex] = {
            ...newItem, // keeps other items in the object
            quantity: newQty,
            total: newTotal,
          };
        } else {
          state.cartItems.splice([itemIndex], 1);
        }
        // console.log("updated existing", current(state));
      }
      // console.log("updated existing", current(state));
    },
  },
  // one to total shit up
});
export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
