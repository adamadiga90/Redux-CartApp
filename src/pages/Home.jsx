import React, { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import { useSelector } from "react-redux";

const Home = () => {
  const cartIndex = useSelector((state) => state.cart.cartIndex);
  const cartMenu = useSelector((state) => state.cart.cartMenu);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(12);
  const [skip, setSkip] = useState(0);

  function handleScroll() {
    if (
      window.scrollY ===
      document.documentElement.scrollHeight - window.innerHeight
    ) {
      console.log("hello");

      setLimit(limit + 10);
      fetchProducts();
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );
      const data = await response.json();
      if (data && data.products?.length > 0) {
        if (products.length > 0) {
          let newProducts = [...products, ...data.products];
          setProducts(newProducts);
          console.log(products);
        } else {
          setLoading(false);
          setProducts(data.products);
        }
      }
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  if (loading) {
    return (
      <div className="spinner-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }
  return (
    <div className="product-container">
      {/* <button onClick={handleScroll}>
        22
        {document.documentElement.scrollHeight}
      </button> */}
      {products.length > 0
        ? products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        : null}
    </div>
  );
};

export default Home;
