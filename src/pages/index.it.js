import React, { useContext, useEffect } from "react";
import { graphql } from "gatsby";

import Hero from "../sections/Hero";
import Businesses from "../sections/Businesses";
import BottomSection from "../sections/BottomSection";
import NewsletterSubscriber from "../sections/NewsletterSubscriber";
import Seo from "../components/SEO";

import LanguageContext from "../context/languageContext";

const IndexPage = ({
  data: {
    italianBusinessesData: { italianBusinessesData }
  },
}) => {
  const languageData = useContext(LanguageContext);

  useEffect(() => {
    if (languageData && languageData.setLanguage) languageData.setLanguage("it");
  }, [languageData]);
  return (
    <main>
      <Hero />
      <Businesses data={italianBusinessesData} />
      <NewsletterSubscriber />
      <BottomSection />
    </main>
  );
};

export const Head = ({
  data: {
    site: {
      siteMetadata: { italianTitle, italianDescription },
    },
  },
}) => <Seo title={italianTitle} description={italianDescription} language="it" />;

export const query = graphql`
  query ItalianBusinesses {
  site {
      siteMetadata {
        italianDescription
        italianTitle
      }
    }
  italianBusinessesData:allAirtable(
    filter: {table: {eq: "Italian Businesses"}, data: {isActive: {eq: true}}},
    sort: {data: {rowNumber: ASC}}
  ) {
    italianBusinessesData:nodes {
      id
      data {
        box {
          localFiles {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        logos {
          localFiles {
            id
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        logosTitle
        logosBgColor
        logosTextColor
        logo {
          localFiles {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        subTextTitle
        subTextLogos {
          localFiles {
            id
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        color
        content
        cta
        defaultAlignment
        link
        maxWidth
        name
      }
    }
  }
}
`;

export default IndexPage;
