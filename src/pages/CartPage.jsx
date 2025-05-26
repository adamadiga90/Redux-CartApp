import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";

const CartPage = () => {
  const cartMenu = useSelector((state) => state.cart.cartMenu);
  return (
    <div>
      {cartMenu.length > 0 ? (
        cartMenu.map((item) => (
          <div>
            <ProductItem product={item} />
          </div>
        ))
      ) : (
        <h1>There are no products in your cart...</h1>
      )}{" "}
    </div>
  );
};

export default CartPage;
