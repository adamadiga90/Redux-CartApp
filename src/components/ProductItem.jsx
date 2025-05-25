import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="product-box" key={product.id}>
      <div className="image">
        <img src={product.images[0]} alt="" />
      </div>
      <div className="info">
        <h2>{product.title}</h2>
        <p ellipsis="..." maxLine="2">
          {product.description}
        </p>
      </div>
      <button className="add-to-cart">Add To Cart</button>
    </div>
  );
};

export default ProductItem;
