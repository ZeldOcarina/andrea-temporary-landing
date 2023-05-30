import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";

const LanguageContext = React.createContext({});

function LanguageProvider(props) {
  const [language, setLanguage] = useState("en");
  const [languageData, setLanguageData] = useState({});

  const freshLanguageData = useStaticQuery(query).allContentJson.nodes[0];

  useEffect(() => {
    if (language === "en") {
      setLanguageData(freshLanguageData.english);
    } else if (language === "it") {
      setLanguageData(freshLanguageData.italian);
    }
  }, [language, languageData, freshLanguageData]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, languageData }}>
      {props.children}
    </LanguageContext.Provider>
  );
}

const query = graphql`
  {
    allContentJson {
      nodes {
        english {
          bottomSection {
            content
            subtitle
            title
          }
          businesses {
            preTitle
            title
          }
          hero {
            cta
            preTitle
            iconsTitle
            title
          }
          subscriptionForm {
            cta
            privacy
            secondCta
            title
          }
        }
        italian {
          bottomSection {
            content
            subtitle
            title
          }
          businesses {
            preTitle
            title
          }
          hero {
            cta
            iconsTitle
            title
            preTitle
          }
          subscriptionForm {
            cta
            privacy
            secondCta
            title
          }
        }
      }
    }
  }
`;

export default LanguageContext;
export { LanguageProvider };
