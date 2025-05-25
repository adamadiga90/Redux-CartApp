import React, { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(30);
  const [skip, setSkip] = useState(0);
  async function fetchProducts() {
    const response = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );
    const data = await response.json();
    if (data && data.products?.length > 0) {
      setProducts(data.products);
      console.log(data);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      {products.length > 0 ? products.map((product) => <div>s</div>) : null}
    </div>
  );
};

export default Home;
