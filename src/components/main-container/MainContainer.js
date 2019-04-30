import React from "react";
import "./MainContainer.css";

import ProductCard from "../card/product/ProductCard";
import OfferCard from "../card/offer/OfferCard";
import PopularItems from "../card/popular-items/PopularItems";

const MainContainer = () => {
  return (
    <div className="main-container-wrapper">
      <div className="main-container">
        {/* TODO: Use an array to hold products with props */}
        <PopularItems />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <OfferCard />
      </div>
    </div>
  );
};

export default MainContainer;
