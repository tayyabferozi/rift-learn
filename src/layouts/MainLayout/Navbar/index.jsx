import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar" className="section">
      <div className="page-container">
        <div className="logo">RIFT</div>
        <div className="nav">
          <Link to="#0">About</Link>
          <Link to="#0">Programs</Link>
          <Link to="#0">Blog</Link>
          <Link to="#0">Contact</Link>
          <div className="toggler">
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
