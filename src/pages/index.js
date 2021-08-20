import React from "react";
import { graphql } from "gatsby";

import Hero from "../sections/Hero";
import Businesses from "../sections/Businesses";
import BottomSection from "../sections/BottomSection";
import BottomText from "../sections/BottomText";
import NewsletterSubscriber from "../sections/NewsletterSubscriber";

const IndexPage = ({ data: { allBusinessesJson } }) => {
  return (
    <main>
      <Hero />
      <Businesses data={allBusinessesJson} />
      <NewsletterSubscriber />
      <BottomSection />
      <BottomText />
    </main>
  );
};

export const query = graphql`
  {
    allBusinessesJson {
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
