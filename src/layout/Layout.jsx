import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, location }) => {
  return (
    <>
      <Navbar location={location} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
