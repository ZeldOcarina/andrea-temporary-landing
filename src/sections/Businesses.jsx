import React, { useContext } from "react";
import styled, { css } from "styled-components";
import respond from "../styles/abstracts/mediaqueries";
import { useMediaQuery } from "react-responsive";

import BusinessCard from "../components/BusinessCard";
import BrushedTitle from "../components/BrushedTitle";

import LanguageContext from "../context/languageContext";

const Wrapper = styled.section`
  padding-bottom: 0;

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    margin: 6rem auto 0 auto;

    ${respond(
      "laptop",
      css`
        grid-template-columns: 1fr 1fr;
      `
    )}
    ${respond(
      "tab-port",
      css`
        grid-template-columns: 1fr;
      `
    )}
  }

  .pre-title {
    text-transform: uppercase;
    text-align: center;
    font-style: italic;
    margin-bottom: 1rem;
  }
`;

const Businesses = ({ data }) => {
  const { languageData } = useContext(LanguageContext);
  const isPhonePort = useMediaQuery({
    query: "(max-width: 28.125em)",
  });

  while (!languageData.businesses?.title) return "";

  const {
    businesses: { preTitle, title },
  } = languageData;

  return (
    <Wrapper>
      <h3 className="pre-title">{preTitle}</h3>
      <BrushedTitle scale={1.5} fontSize={isPhonePort ? "3rem" : "5rem"}>
        {title}
      </BrushedTitle>
      <div className="grid">
        {data.map((businessData, i) => {
          return <BusinessCard {...businessData} key={i} />;
        })}
      </div>
    </Wrapper>
  );
};

export default Businesses;
