import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";
import { removeFromCart } from "../features/cart/cartSlice";

const CartPage = () => {
  const cartMenu = useSelector((state) => state.cart.cartMenu);

  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();
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
        <div className="cart-container">
          <div className="cart-products">
            {cartMenu.map((item) => (
              <div className="cart-product">
                <div className="product-image">
                  <img src={item.thumbnail} alt="" />
                </div>
                <div className="product-info">
                  <div className="title">
                    <h1>{item.title}</h1>
                  </div>
                  <p>{item.description}</p>
                </div>
                <div className="remove-price">
                  <span className="item-price">{item.price}$</span>
                  <button
                    onClick={() => dispatch(removeFromCart({ id: item.id }))}
                    className="add-to-cart"
                  >
                    <span>Remove From Cart</span>
                  </button>
                </div>
                <br />
              </div>
            ))}
          </div>
          <div className="summary">
            <h2>Summary</h2>
            <div className="total-box">Total: {Math.round(price)}$</div>
            <button className="add-to-cart">Checkout</button>
          </div>
        </div>
      ) : (
        <h1>There are no products in your cart...</h1>
      )}{" "}
    </div>
  );
};

export default CartPage;
