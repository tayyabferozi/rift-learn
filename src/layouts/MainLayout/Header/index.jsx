import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { GlobalContext } from "../../../context/GlobalState";
import { changeIsDarkMode } from "../../../context/actions";

const Navbar = () => {
  const {
    state: { isDarkMode },
    dispatch,
  } = useContext(GlobalContext);

  const switchToggler = (e) => {
    dispatch(changeIsDarkMode(e.target.checked));
  };

  useEffect(() => {
    const body = document.body;

    if (isDarkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <div id="header" className="section">
      <div className="page-container">
        <div className="logo">
          <span className="name">RIFT</span>
        </div>
        <div className="nav">
          <Link to="#0">About</Link>
          <Link to="#0">Programs</Link>
          <Link to="#0">Blog</Link>
          <Link to="#0">Contact</Link>
          <div className="toggler">
            <label className="switch">
              <input onChange={switchToggler} type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
