import Card from "../UI/Card";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

import { cartActions } from "../../store/cart";

const Cart = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems.cartItems);

  const addProductToCartHandler = (product) => {
    // console.log(product);
    dispatch(cartActions.addProduct(product));
  };

  const removeProductToCartHandler = (product) => {
    // console.log(product);
    dispatch(cartActions.removeProduct(product));
  };
  // console.log(cartItems);

  return (
    <>
      {cartItems.length > 0 && (
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>
            {cartItems.map((product, index) => {
              return (
                <CartItem
                  key={index.toString()}
                  item={{
                    title: product.title,
                    addProduct: addProductToCartHandler.bind(null, product),
                    removeProduct: removeProductToCartHandler.bind(
                      null,
                      product
                    ),
                    quantity: product.quantity,
                    total: product.total,
                    price: product.price,
                  }}
                />
              );
            })}
          </ul>
        </Card>
      )}
    </>
  );
};

export default Cart;
