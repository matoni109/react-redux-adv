import classes from "./CartButton.module.css";
import { useSelector } from "react-redux";

const CartButton = (props) => {
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  const showCart = useSelector((state) => state.ui);

  const items = cartItems
    .map((item) => item.quantity)
    .reduce((a, b) => a + b, 0);

  return (
    <>
      {items > 0 && (
        <button className={classes.button}>
          <span>My Cart</span>
          <span className={classes.badge}>{items}</span>
        </button>
      )}
    </>
  );
};

export default CartButton;
