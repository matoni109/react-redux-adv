import { useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { current } from "@reduxjs/toolkit";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { uiActions } from "./store/ui-slice";

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  const notification = useSelector((state) => state.ui.notification);
  // console.log(
  //   "updated existing",
  //   current((state) => state.ui.notification)
  // );

  // if cart changes below fires
  useEffect(() => {
    console.log("sendme");
    const sendCartData = async () => {
      // send to uiAction
      dispatch(
        uiActions.showNoticication({
          status: "pending",
          title: "Sending",
          message: "Sending Cart info",
        })
      );
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
      // send success :)
      dispatch(
        uiActions.showNoticication({
          status: "success",
          title: "Success!",
          message: "Sent Cart info - OK ",
        })
      );
      // const responseData = await response.json();
    };
    // .then((res) => res.json())
    // .then((data) => console.log(data));}
    //
    // catch any errors as sendCartData
    // returns a Promise!
    sendCartData().catch((error) => {
      dispatch(
        uiActions.showNoticication({
          status: "error",
          title: "Error!",
          message: "Sending Cart Data Failed erno ",
        })
      );
    });
  }, [cartItems, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        <Cart />
        <Products />
      </Layout>
    </>
  );
}

export default App;
