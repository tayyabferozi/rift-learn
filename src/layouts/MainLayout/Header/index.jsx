import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import { GlobalContext } from "../../../context/GlobalState";
import { changeIsDarkMode } from "../../../context/actions";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenuHandler = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div id="header" className="section">
      <div className="page-container">
        <Link to="/" className="logo">
          <span className="name">RIFT</span>
        </Link>
        <div className="menu d-sm-none" onClick={toggleMenuHandler}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div
          className={clsx(isMenuOpen && "open", "nav")}
          onClick={toggleMenuHandler}
        >
          <div className="close d-sm-none">&times;</div>
          <Link to="/" className="d-sm-none">
            <div className="logo">RIFT</div>
          </Link>
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
