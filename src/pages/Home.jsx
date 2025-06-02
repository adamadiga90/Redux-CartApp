import React, { useCallback, useEffect, useState } from "react";
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
  const [smallLoading, setSmallLoading] = useState(false);

  function handleScroll() {
    // if (smallLoading) return;
    if (
      window.scrollY ===
        document.documentElement.scrollHeight - window.innerHeight &&
      !smallLoading
    ) {
      if (!smallLoading) {
        setSkip((prevSkip) => prevSkip + limit);
      }
    }
  }

  useEffect(() => {
    console.log("Updated limit:", limit);
    console.log("Updated skip:", skip);
    console.log(products);
    // console.log(smallLoading);
  }, [limit, products, smallLoading]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  async function fetchProducts() {
    try {
      if (products <= 0) {
        setLoading(true);
      }
      if (products > 0) {
        setSmallLoading(true);
        console.log("Loading");
      }
      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );
      const data = await response.json();
      if (data?.products?.length > 0) {
        if (products.length > 0) {
          setProducts((prevProducts) => [...prevProducts, ...data.products]);
          console.log(products);
          setSmallLoading(false);
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
  }, [skip]);
  // if (loading) {
  //   return (

  //   );
  // }
  return (
    <div className={!loading && `product-container`}>
      {loading && (
        <div className="spinner-container">
          <div className="loading-spinner"></div>
        </div>
      )}
      {products.length > 0
        ? products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        : null}
      {!smallLoading && <div>Loading...</div>}
    </div>
  );
};

export default Home;
