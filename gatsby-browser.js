const React = require("react");
require("./src/scss/index.scss");
const GlobalStyles = require("./src/styles/global-styles").default;
const Layout = require("./src/layout/Layout").default;
const { LanguageProvider } = require("./src/context/languageContext");

exports.wrapRootElement = ({ element }) => {
  return <LanguageProvider>{element}</LanguageProvider>;
};

exports.wrapPageElement = (props) => {
  return (
    <>
      <GlobalStyles />
      <Layout location={props.element.props.location}>{props.element}</Layout>
    </>
  );
};
