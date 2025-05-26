import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../features/cart/cartSlice";
// import { addToCart } from "../features/cart/cartSlice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const cartMenu = useSelector((state) => state.cart.cartMenu);
  // console.log(cartMenu);

  const isInCart = cartMenu.some((item) => item.id === product.id);
  // isInCart
  //   ?
  // () => dispatch(addToCart({ product: product, id: product.id }))
  // : () => dispatch(removeFromCart({ id: product.id }))
  // const handleClick = () => {
  //   if (isInCart) {
  //     dispatch(addToCart({ product: product, id: product.id }));
  //   }
  //   // : dispatch(removeFromCart({ id: product.id }));
  // };

  return (
    <div className="product-box" key={product.id}>
      <div className="image">
        <img src={product.images[0]} alt="" />
      </div>
      <div className="info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
      </div>
      <button
        onClick={() =>
          isInCart
            ? dispatch(removeFromCart({ id: product.id }))
            : dispatch(addToCart({ product: product, id: product.id }))
        }
        className="add-to-cart"
      >
        <span>{!isInCart ? `Add To Cart` : `Remove From Cart`}</span>
      </button>
    </div>
  );
};

export default ProductItem;
