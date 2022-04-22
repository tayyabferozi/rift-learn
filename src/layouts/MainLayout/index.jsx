import React from "react";
import Navbar from "./Navbar";

const MainLayout = ({ children }) => {
  return (
    <div id="main-layout">
      <Navbar />
      <div className="main-body">{children}</div>
    </div>
  );
};

export default MainLayout;
