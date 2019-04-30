import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-wrapper">
      <div className="banner-image">
        <p>Image</p>
      </div>
      <p className="banner-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero corporis
        aliquam, iure vitae ab dolorem, porro eius omnis delectus laboriosam
        veniam cupiditate nihil sapiente vel provident eaque. Ea, beatae
        eligendi.
      </p>
      {/* TODO: Add a button for call-to-action */}
    </div>
  );
};

export default Banner;
