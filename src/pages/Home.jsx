import React, { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import { useSelector } from "react-redux";

const Home = () => {
  const cartIndex = useSelector((state) => state.cart.cartIndex);
  const cartMenu = useSelector((state) => state.cart.cartMenu);
  console.log(cartMenu);
  const arrayOf = [
    { id: 1, name: "adam" },
    { id: 2, name: "kareem" },
    { id: 3, name: "hamood" },
    { id: 4, name: "ali" },
    { id: 5, name: "omar" },
    { id: 6, name: "hussin" },
  ];
  // let answer = arrayOf.some((item) => item.id === 1);
  // let newArrayOf = [{ id: 1, name: "adam" }];
  // newArrayOf.some((item) => (item.id !== 19 ? newArrayOf.push(item) : null));
  // console.log(answer);

  // console.log(arrayOf.filter((item) => item.id !== 1));

  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  async function fetchProducts() {
    const response = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );
    const data = await response.json();
    if (data && data.products?.length > 0) {
      setProducts(data.products);
      // console.log(data.products);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="product-container">
      {products.length > 0
        ? products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        : null}
    </div>
  );
};

export default Home;
