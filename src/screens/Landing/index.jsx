import React from "react";
import { Link } from "react-router-dom";

import GridContainer from "../../components/GridContainer";
import Section from "../../components/Section";
import MainLayout from "../../layouts/MainLayout";

const Landing = () => {
  return (
    <MainLayout>
      <Section id="boxes">
        <GridContainer>
          <div className="col-md-6">
            <Link to="/learn" className="box box-1"></Link>
          </div>
          <div className="col-md-6">
            <div className="row g-4 second">
              <div className="col-12">
                <Link to="/learn" className="box box-2"></Link>
              </div>
              <div className="col-sm-6">
                <Link to="/learn" className="box box-3"></Link>
              </div>
              <div className="col-sm-6">
                <Link to="/learn" className="box box-4"></Link>
              </div>
            </div>
          </div>
        </GridContainer>
      </Section>
    </MainLayout>
  );
};

export default Landing;
