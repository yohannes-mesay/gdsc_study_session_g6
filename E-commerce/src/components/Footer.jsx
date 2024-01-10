import React from "react";
import { Link, NavLink } from "react-router-dom";

function Footer() {
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
}

export default Footer;
