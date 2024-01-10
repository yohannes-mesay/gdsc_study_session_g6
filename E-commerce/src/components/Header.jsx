import React from "react";
import { Link } from "react-router-dom";
import '../index.css'
const Header = () => {
  return (
    <div className="container">
      <div className="inner-container">
        <div className="logo">
          <Link to="/" className="brand">
            WSP
          </Link>
        </div>
        <div className="nav-nav-pills">
          <Link to="/" className="brand">
            Home
          </Link>

          <Link to="about" className="brand">
            About
          </Link>
          <Link to="products" className="brand">
            Products
          </Link>
          <Link to="posts" className="brand">
            Posts
          </Link>
          
        </div>

      </div>
    </div>
  );
};

export default Header;
