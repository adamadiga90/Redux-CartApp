import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentImg, setCurrentImg] = useState(0);

  const { id } = useParams();

  async function fetchProduct() {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      if (data) {
        setLoading(false);
        setProduct(data);
      }
    } catch (e) {
      setLoading(false);
      console.log(e.message);
      setError(e.message);
    }
  }
  useEffect(() => {
    fetchProduct();
  }, [id]);
  let currentImage = fallbackImage;
  // const currentImage = product.images.?currentImg || ""
  if (product.images.length > 0) {
    currentImg = product.images[currentImg];
  }
  const fallbackImage =
    "https://via.placeholder.com/300?text=No+Image+Available";
  if (loading) {
    return (
      <div className="spinner-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="product-page-container">
      <div className="images-container">
        <img src={currentImage} alt="" />
      </div>
      <div className="info-container">
        <h1>{product.title}</h1>
        <p className="description">{product.description}</p>
        <p className="price">price: {product.price}$</p>
      </div>
    </div>
  );
};

export default ProductPage;
