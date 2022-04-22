import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Section from "../../components/Section";

const MiniLayout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div id="min-layout">
      <Section id="header">
        <div className="back" onClick={() => navigate(-1)}>
          &lt;
        </div>
        <Link className="logo" to="/">
          <span className="name">RIFT</span>{" "}
          <span className="green">Learn</span>
        </Link>
        <div></div>
      </Section>
      <div id="main-body">{children}</div>
    </div>
  );
};

export default MiniLayout;
