import classes from "./CartButton.module.css";
import { useSelector } from "react-redux";

const CartButton = (props) => {
  const cartItems = useSelector((state) => state.cartItems.cartItems);

  const items = cartItems
    .map((item) => item.quantity)
    .reduce((a, b) => a + b, 0);

  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{items}</span>
    </button>
  );
};

export default CartButton;
