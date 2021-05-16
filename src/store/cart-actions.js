import { uiActions } from "./ui-slice";
import { cartActions } from "./cart";

// make THUNK outside of the SLICE
//
export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-db-api-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "GET",
          dataType: "json",
        }
        // PUT overides existing data
      );
      if (!response.ok) {
        throw new Error("Cart data failed..");
      }
      const data = await response.json();

      if (data === null) {
        return [];
      }
      return data;
    };

    try {
      const cartData = await fetchData();

      dispatch(cartActions.replaceCart(cartData));
    } catch (error) {
      dispatch(
        uiActions.showNoticication({
          status: "error",
          title: "Error!",
          message: "Fetching Cart Data Failed erno ",
        })
      );
    }
  };
};

// send Cart Data
export const sendCartData = (cartItems) => {
  return async (dispatch) => {
    // reducer called here
    dispatch(
      uiActions.showNoticication({
        status: "pending",
        title: "Sending",
        message: "Sending Cart info",
      })
    );
    /// send the http request
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-db-api-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          dataType: "json",
          body: JSON.stringify(cartItems),
        }
        // PUT overides existing data
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed..");
      }
    };

    // handle the promise return
    try {
      await sendRequest();
      dispatch(
        uiActions.showNoticication({
          status: "success",
          title: "Success!",
          message: "Sent Cart info - OK ",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNoticication({
          status: "error",
          title: "Error!",
          message: "Sending Cart Data Failed erno ",
        })
      );
    }
  };
};
