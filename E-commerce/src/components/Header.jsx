import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <div className="inner-container">
        <div className="logo">
          <Link to="/" className="brand">
            WSP
          </Link>   
        </div>
      </div>
    </div>
  );
};

export default Header;
