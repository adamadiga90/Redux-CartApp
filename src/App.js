import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import Navbar from "./components/Navbar";
import ProductPage from "./pages/ProductPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products/productId" element={<ProductPage />} />
      </Routes>
    </div>
  );
};

export default App;
