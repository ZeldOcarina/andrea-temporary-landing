import React, { useContext } from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

import BrushedTitle from "../components/BrushedTitle";
import BottomText from "../components/BottomText";

import LanguageContext from "../context/languageContext";

const Wrapper = styled.section`
  position: relative;
  padding-top: 8rem;
  padding-bottom: 60vh;

  .bg-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .after-title {
    font-family: var(--title-font);
    text-transform: uppercase;
    font-style: italic;
    text-align: center;
    z-index: 100;
    position: relative;
  }
`;

const BottomSection = () => {
  const { languageData } = useContext(LanguageContext);

  console.log(languageData);
  while (!languageData.bottomSection?.title) return "";

  const {
    bottomSection: { content, subtitle, title },
  } = languageData;
  return (
    <>
      <Wrapper>
        <BrushedTitle>{title}</BrushedTitle>
        <h2 className="after-title">{subtitle}</h2>
        <StaticImage
          alt="Andrea d'Agostini on a stage"
          src="../images/bottom-section.png"
          placeholder="tracedSVG"
          layout="fullWidth"
          className="bg-image"
        />
      </Wrapper>
      <BottomText content={content} />
    </>
  );
};

export default BottomSection;
