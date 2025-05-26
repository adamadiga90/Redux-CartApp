import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
// import { addToCart } from "../features/cart/cartSlice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

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
          dispatch(addToCart({ product: product, id: product.id }))
        }
        className="add-to-cart"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductItem;
