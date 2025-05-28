import React, { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import { useSelector } from "react-redux";

const Home = () => {
  const cartIndex = useSelector((state) => state.cart.cartIndex);
  const cartMenu = useSelector((state) => state.cart.cartMenu);
  // 1903
  // console.log(window.scrollY);
  // console.log(window.scrollY);
  // 2840
  // console.log(document.documentElement.scrollHeight);
  // 937
  // console.log(window.innerHeight);
  // console.log(document.documentElement.scrollHeight - window.innerHeight);

  function handleScroll() {
    // if (
    //   window.scrollY ===
    //   document.documentElement.scrollHeight - window.innerHeight
    // ) {
    //   console.log("noo");
    // }
    // window.scrollTo({
    //   top: document.documentElement.scrollHeight,
    //   behavior: "smooth",
    // });
    // console.log(document.documentElement.scrollHeight);
  }

  let screenPosition = useState(window.scrollY);
  useEffect(() => {
    console.log("hello");
  }, [screenPosition]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(22);
  const [skip, setSkip] = useState(0);
  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );
      const data = await response.json();
      if (data && data.products?.length > 0) {
        setLoading(false);
        setProducts(data.products);
        // console.log(data.products);
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
      <button onClick={handleScroll}>
        {document.documentElement.scrollHeight}
      </button>
      {products.length > 0
        ? products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        : null}
    </div>
  );
};

export default Home;
