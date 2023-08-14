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
    englishBusinessesData: { englishBusinessesData }
  },
}) => {
  const languageData = useContext(LanguageContext);

  useEffect(() => {
    if (languageData && languageData.setLanguage) languageData.setLanguage("en");
  }, [languageData]);

  return (
    <main>
      <Hero english />
      <Businesses data={englishBusinessesData} />
      <NewsletterSubscriber />
      <BottomSection />
    </main>
  );
};

export const Head = ({
  data: {
    site: {
      siteMetadata: { englishTitle, englishDescription },
    },
  },
}) => <Seo title={englishTitle} description={englishDescription} language="en" />

export const query = graphql`
  query EnglishBusinesses {
  site {
      siteMetadata {
        italianDescription
        italianTitle
      }
    }
  englishBusinessesData:allAirtable(
    filter: {table: {eq: "English Businesses"}}
    sort: {data: {rowNumber: ASC}}
  ) {
    englishBusinessesData:nodes {
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
