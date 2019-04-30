import React from "react";
import "./OfferCard.css";

const OfferCard = () => {
  return (
    <div className="offer-card-wrapper">
      <div className="offer-card-image">
        <p>Image</p>
      </div>
      <div className="offer-card-description-wrapper">
        <p className="offer-card-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit velit
          molestiae eveniet quae doloribus, ratione dolorem minus, ut modi dolor
          tenetur corrupti tempora commodi qui saepe eaque eius reprehenderit
          aspernatur!
        </p>
        <button>See offer</button>
      </div>
    </div>
  );
};

export default OfferCard;
