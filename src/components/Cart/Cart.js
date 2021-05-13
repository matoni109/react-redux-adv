import Card from "../UI/Card";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems.cartItems);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((product, index) => {
          return (
            <CartItem
              key={index.toString()}
              item={{
                title: product.title,
                quantity: product.quantity,
                total: product.total,
                price: product.price,
              }}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;
