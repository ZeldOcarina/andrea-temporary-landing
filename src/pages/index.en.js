import React, { useContext, useEffect } from "react";
import { graphql } from "gatsby";

import Hero from "../sections/Hero";
import Businesses from "../sections/Businesses";
import BottomSection from "../sections/BottomSection";
import BottomText from "../sections/BottomText";
import NewsletterSubscriber from "../sections/NewsletterSubscriber";

import LanguageContext from "../context/languageContext";

const IndexPage = ({ data: { allBusinessesEnJson } }) => {
  const languageData = useContext(LanguageContext);

  useEffect(() => {
    if (languageData && languageData.setLanguage) languageData.setLanguage("en");
  }, [languageData]);

  return (
    <main>
      <Hero />
      <Businesses data={allBusinessesEnJson} />
      <NewsletterSubscriber />
      <BottomSection />
      <BottomText />
    </main>
  );
};

export const query = graphql`
  {
    allBusinessesEnJson {
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
