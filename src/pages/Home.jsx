import React, { useCallback, useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { turnSearchDown } from "../features/cart/cartSlice";

const Home = () => {
  const dispatch = useDispatch();
  const cartMenu = useSelector((state) => state.cart.cartMenu);
  const search = useSelector((state) => state.cart.search);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(12);
  const [skip, setSkip] = useState(0);
  const [smallLoading, setSmallLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  let previousSkip = skip;

  function handleScroll() {
    if (
      window.scrollY ===
        document.documentElement.scrollHeight - window.innerHeight &&
      !smallLoading
    ) {
      if (!smallLoading && !search.isSearch) {
        setSkip((prevSkip) => prevSkip + limit);
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  async function fetchProducts() {
    try {
      if (search.isSearch) {
        setSearchLoading(true);
      }
      if (products <= 0) {
        setLoading(true);
      }
      if (products > 0 && !search.isSearch) {
        setSmallLoading(true);
      }
      const response = await fetch(
        search.isSearch
          ? `https://dummyjson.com/products/search?q=${search.name}`
          : `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );
      const data = await response.json();
      if (data?.products?.length > 0) {
        if (search.isSearch) {
          console.log("isSearch: true");
          setProducts(data.products);
          setSearchLoading(false);
        } else if (
          products.length > 0 &&
          !search.isSearch &&
          previousSkip !== skip
        ) {
          console.log("load more products");
          setProducts((prevProducts) => [...prevProducts, ...data.products]);
          setSmallLoading(false);
        } else if (!search.isSearch) {
          console.log("isSearch: false");
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
    console.log(search.isSearch);

    fetchProducts();
  }, [skip, search.isSearch]);
  if (loading) {
    return (
      <div className="spinner-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }
  return (
    <div className={`product-container`}>
      {products.length > 0
        ? products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        : null}
    </div>
  );
};

export default Home;
