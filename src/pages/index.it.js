import React, { useContext, useEffect } from "react";
import { graphql } from "gatsby";

import Hero from "../sections/Hero";
import Businesses from "../sections/Businesses";
import BottomSection from "../sections/BottomSection";
import BottomText from "../sections/BottomText";
import NewsletterSubscriber from "../sections/NewsletterSubscriber";

import LanguageContext from "../context/languageContext";

const IndexPage = ({ data: { allBusinessesItJson }, location }) => {
  console.log(location);
  const languageData = useContext(LanguageContext);

  useEffect(() => {
    if (languageData && languageData.setLanguage) languageData.setLanguage("it");
  }, [languageData]);
  return (
    <main>
      <Hero />
      <Businesses data={allBusinessesItJson} />
      <NewsletterSubscriber />
      <BottomSection />
      <BottomText />
    </main>
  );
};

export const query = graphql`
  {
    allBusinessesItJson {
      nodes {
        extraContent
        extraLogo {
          name
          childrenImageSharp {
            gatsbyImageData
          }
        }
        name
        content
        cta
        box {
          childrenImageSharp {
            gatsbyImageData
          }
        }
        link
        logo {
          childrenImageSharp {
            gatsbyImageData
          }
        }
        color
      }
    }
  }
`;

export default IndexPage;
