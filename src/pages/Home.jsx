import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/cart/productSlice";

const Home = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return <div>Home</div>;
};

export default Home;
