import React, { useContext, useEffect } from "react";
import { graphql } from "gatsby";

import Hero from "../sections/Hero";
import Businesses from "../sections/Businesses";
import BottomSection from "../sections/BottomSection";
import NewsletterSubscriber from "../sections/NewsletterSubscriber";
import SEO from "../components/SEO";

import LanguageContext from "../context/languageContext";

const IndexPage = ({
  data: {
    allBusinessesItJson,
    site: {
      siteMetadata: { italianTitle, italianDescription },
    },
  },
}) => {
  const languageData = useContext(LanguageContext);

  useEffect(() => {
    if (languageData && languageData.setLanguage) languageData.setLanguage("it");
  }, [languageData]);
  return (
    <main>
      <SEO title={italianTitle} description={italianDescription} language="it" />
      <Hero />
      <Businesses data={allBusinessesItJson} />
      <NewsletterSubscriber />
      <BottomSection />
    </main>
  );
};

export const query = graphql`
  {
    site {
      siteMetadata {
        italianDescription
        italianTitle
      }
    }
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
