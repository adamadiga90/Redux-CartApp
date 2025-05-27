import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";

const CartPage = () => {
  const cartMenu = useSelector((state) => state.cart.cartMenu);
  const [price, setPrice] = useState(0);
  // console.log(cartMenu[0].price);

  function calculatePrice() {
    let newPrice = 0;
    for (let i = 0; i < cartMenu.length; i++) {
      newPrice += cartMenu[i].price;
    }
    setPrice(newPrice);
  }

  useEffect(() => {
    calculatePrice();
  }, [cartMenu]);
  return (
    <div className="cart-page">
      <div className="product-container">
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
      <div className="total-box">Total: {Math.round(price)}$</div>
    </div>
  );
};

export default CartPage;
