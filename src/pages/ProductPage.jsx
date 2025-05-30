import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentImg, setCurrentImg] = useState(0);
  const [imgLoading, setImgLoading] = useState(false);

  const { id } = useParams();

  async function fetchProduct() {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      if (data) {
        setLoading(false);
        setProduct(data);
        console.log(data.images.length);

        setCurrentImg(0);
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

  const hasImg = product.images && product.images.length > 0;
  const fallbackImage =
    "https://via.placeholder.com/300?text=No+Image+Available";

  function handleClick(index) {
    setCurrentImg(index);
  }

  function handleLeft() {
    setCurrentImg((prevCurrent) =>
      prevCurrent === 0 ? product.images.length - 1 : prevCurrent - 1
    );
  }

  function handleRight() {
    setCurrentImg((prevCurrent) =>
      prevCurrent === product.images.length - 1 ? 0 : prevCurrent + 1
    );
  }

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
        <div onClick={handleLeft} className="arrow left-arrow">
          <img
            src="https://img.icons8.com/?size=100&id=yuV1lR4yTlZo&format=png&color=83A85D"
            alt=""
          />
        </div>
        <div onClick={handleRight} className="arrow right-arrow">
          <img
            src="https://img.icons8.com/?size=100&id=yuV1lR4yTlZo&format=png&color=83A85D"
            alt=""
          />
        </div>
        <img
          className="the-img"
          src={hasImg ? product.images[currentImg] : fallbackImage}
          alt=""
        />
        <div className="dots-container">
          {hasImg
            ? product.images.map((dot, index) => (
                <span
                  onClick={() => handleClick(index)}
                  className={`dot ${index === currentImg ? `active` : ``} `}
                  key={index}
                ></span>
              ))
            : null}
        </div>
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
