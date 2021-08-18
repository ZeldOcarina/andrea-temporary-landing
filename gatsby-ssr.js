// gatsby-ssr.js
const React = require("react");
require("./src/scss/index.scss");
const GlobalStyles = require("./src/styles/global-styles").default;
const Layout = require("./src/layout/Layout").default;

exports.wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyles />
      <Layout>{element}</Layout>
    </>
  );
};
