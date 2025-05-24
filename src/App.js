import React from "react";
import { useSelector } from "react-redux";

const App = () => {
  const cartIndex = useSelector((state) => state.cart.cartIndex);
  return <div>{cartIndex}</div>;
};

export default App;
