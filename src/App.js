import { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  console.log(cartItems);
  // if cart changes below fires
  useEffect(() => {
    console.log("sendme");
    fetch(
      "https://react-db-api-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
      {
        method: "PUT",
        dataType: "json",
        body: JSON.stringify(cartItems),
      }
      // PUT overides existing data
    );
    // .then((res) => res.json())
    // .then((data) => console.log(data));
  }, [cartItems]);

  return (
    <Layout>
      <Cart />
      <Products />
    </Layout>
  );
}

export default App;
