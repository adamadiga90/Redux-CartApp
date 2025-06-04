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
      {cartMenu.length > 0 ? (
        <div className="cart-products">
          {cartMenu.map((item) => (
            <div className="cart-product">
              <div className="product-image">
                <img src={item.thumbnail} alt="" />
              </div>
              <div className="product-info">
                <div className="title-and-price">
                  <h1>{item.title}</h1>
                  <span>{item.price}$</span>
                </div>
                <p>{item.description}</p>
              </div>
              <br />
            </div>
          ))}
        </div>
      ) : (
        <h1>There are no products in your cart...</h1>
      )}{" "}
      <div className="total-box">Total: {Math.round(price)}$</div>
    </div>
  );
};

export default CartPage;
