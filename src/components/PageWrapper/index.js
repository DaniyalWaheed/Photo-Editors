import React, { Fragment } from "react";
import Header from "../Header";
import Footer from "../Footer";

const PageWrapper = ({ children }) => {
  return (
    <>
      <Header isHomePage={false} />
      <Fragment>{children}</Fragment>
      <Footer />
    </>
  );
};

export default PageWrapper;
