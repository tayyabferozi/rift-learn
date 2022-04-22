import React from "react";

import Header from "./Header";

const MainLayout = ({ children }) => {
  return (
    <div id="main-layout">
      <Header />
      <div id="main-body">{children}</div>
    </div>
  );
};

export default MainLayout;
