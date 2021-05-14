import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";

const Products = (props) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  const addProductToCartHandler = (product) => {
    // console.log(product);
    dispatch(cartActions.addProduct(product));
  };

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product, index) => {
          return (
            <ProductItem
              key={index}
              title={product.title}
              price={product.price}
              description={product.description}
              addProduct={addProductToCartHandler.bind(null, product)}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
