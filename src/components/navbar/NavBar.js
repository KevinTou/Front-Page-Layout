import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-wrapper">
      {/* TODO: Swap <nav> with <AppBar> and <Toolbar> */}
      <nav className="nav-container">
        {/* TODO: Swap <h1> with <Typography> */}
        <h1 className="logo">Logo</h1>
        {/* TODO: Replace quickfix for empty space */}
        <div className="empty-space" />
        {/* TODO: Create search bar component and replace <input>*/}
        <input
          type="text"
          className="search-bar"
          placeholder="Search for a product..."
        />
        {/* TODO: Swap <button> to possibly <Button> or <Menu>?*/}
        <div className="link-container">
          <button className="link-item">Link</button>
          <button className="link-item">Link</button>
          <button className="link-item">Link</button>
          <button className="link-item">Link</button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
