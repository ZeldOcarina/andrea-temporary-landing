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
    site: {
      siteMetadata: { englishTitle, englishDescription },
    },
    allBusinessesEnJson,
  },
}) => {
  const languageData = useContext(LanguageContext);

  useEffect(() => {
    if (languageData && languageData.setLanguage) languageData.setLanguage("en");
  }, [languageData]);

  return (
    <main>
      <SEO title={englishTitle} description={englishDescription} language="en" />
      <Hero english />
      <Businesses data={allBusinessesEnJson} />
      <NewsletterSubscriber />
      <BottomSection />
    </main>
  );
};

export const query = graphql`
  {
    site {
      siteMetadata {
        englishDescription
        englishTitle
      }
    }
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
