import React from "react";
import "./PopularItems.css";

// Maybe change to PopularProducts?
const PopularItems = () => {
  return (
    <div className="popular-items-wrapper">
      <div className="popular-items-container">
        <h1>Top Five Popular Items</h1>
        <ol className="popular-items-list">
          <li className="popular-item">
            <div className="popular-item-wrapper">
              <div className="popular-item-image">
                <p>Image</p>
              </div>
              <p className="popular-item-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempore accusamus quod molestiae debitis, totam provident.
              </p>
            </div>
          </li>
          <li className="popular-item">
            <div className="popular-item-wrapper">
              <div className="popular-item-image">
                <p>Image</p>
              </div>
              <p className="popular-item-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempore accusamus quod molestiae debitis, totam provident.
              </p>
            </div>
          </li>
          <li className="popular-item">
            <div className="popular-item-wrapper">
              <div className="popular-item-image">
                <p>Image</p>
              </div>
              <p className="popular-item-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempore accusamus quod molestiae debitis, totam provident.
              </p>
            </div>
          </li>
          <li className="popular-item">
            <div className="popular-item-wrapper">
              <div className="popular-item-image">
                <p>Image</p>
              </div>
              <p className="popular-item-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempore accusamus quod molestiae debitis, totam provident.
              </p>
            </div>
          </li>
          <li className="popular-item">
            <div className="popular-item-wrapper">
              <div className="popular-item-image">
                <p>Image</p>
              </div>
              <p className="popular-item-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempore accusamus quod molestiae debitis, totam provident.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default PopularItems;
