const React = require("react");
require("./src/scss/index.scss");
const GlobalStyles = require("./src/styles/global-styles").default;
const Layout = require("./src/layout/Layout").default;

exports.wrapRootElement = ({ element }) => {
  console.log("Running this");
  return (
    <>
      <GlobalStyles />
      <Layout>{element}</Layout>
    </>
  );
};
