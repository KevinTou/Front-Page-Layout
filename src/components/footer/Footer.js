import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-left-container">
          <h1>Links</h1>
          <button>Link</button>
          <button>Link</button>
          <button>Link</button>
          <button>Link</button>
        </div>
        <div className="footer-right-container">
          <h1>Contact</h1>
          <p>
            Your Business <br />
            1234 Your Street <br />
            City, State 12345 <br />
            (123) 456-7890 <br />
            business@email.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
