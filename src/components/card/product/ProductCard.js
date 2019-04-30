import React from "react";
import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div className="product-card-wrapper">
      <div className="product-card-image">
        <p>Image</p>
      </div>
      <p className="product-card-description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
        obcaecati similique, cum aspernatur reiciendis recusandae cumque
        incidunt non quis. Illo!
      </p>
      <div className="button-container">
        <button>Add</button>
        <button>Save</button>
      </div>
    </div>
  );
};

export default ProductCard;
