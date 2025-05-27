import React, { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import { useSelector } from "react-redux";

const Home = () => {
  const cartIndex = useSelector((state) => state.cart.cartIndex);
  const cartMenu = useSelector((state) => state.cart.cartMenu);
  // console.log(cartMenu);
  const arrayOf = [
    { id: 1, name: "adam", value: 500 },
    { id: 2, name: "kareem", value: 100 },
    { id: 3, name: "hamood", value: 500 },
    { id: 4, name: "ali", value: 3000 },
    { id: 5, name: "omar", value: 1500 },
    { id: 6, name: "hussin", value: 2000 },
  ];
  // let answer = 0;
  // for (let i = 0; i < arrayOf.length; i++) {
  //   answer = answer + arrayOf[i].value;
  // }
  // console.log(arrayOf[0].value);
  // console.log(answer);

  // let newArrayOf = [{ id: 1, name: "adam" }];
  // newArrayOf.some((item) => (item.id !== 19 ? newArrayOf.push(item) : null));

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
