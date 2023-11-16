import React, { Fragment } from "react";
import Header from "../Header";
import Footer from "../Footer";

const PageWrapper = ({ children, isHomePage = true }) => {
  return (
    <>
      <Header isHomePage={isHomePage} />
      <Fragment>{children}</Fragment>
      <Footer />
    </>
  );
};

export default PageWrapper;
