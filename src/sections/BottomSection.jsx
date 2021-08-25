import React, { useContext } from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled, { css } from "styled-components";
import respond from "../styles/abstracts/mediaqueries";
import { useMediaQuery } from "react-responsive";

import BrushedTitle from "../components/BrushedTitle";
import BottomText from "../components/BottomText";

import LanguageContext from "../context/languageContext";

const Wrapper = styled.section`
  position: relative;
  padding-top: 8rem;
  padding-bottom: 60vh;

  ${respond(
    "tab-land",
    css`
      padding-bottom: 50vh;
    `
  )}
  ${respond(
    "phone-port",
    css`
      padding-top: 4rem;
      padding-bottom: 60vh;
    `
  )}

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
  const isPhonePort = useMediaQuery({
    query: "(max-width: 28.125em)",
  });

  const { languageData } = useContext(LanguageContext);

  while (!languageData.bottomSection?.title) return "";

  const {
    bottomSection: { content, subtitle, title },
  } = languageData;
  return (
    <>
      <Wrapper>
        <BrushedTitle fontSize={isPhonePort && "3.5rem"}>{title}</BrushedTitle>
        <h2 className="after-title">{subtitle}</h2>
        {isPhonePort ? (
          <StaticImage
            alt="Andrea d'Agostini on a stage"
            src="../images/bottom-section-mobile.png"
            placeholder="tracedSVG"
            layout="fullWidth"
            className="bg-image"
          />
        ) : (
          <StaticImage
            alt="Andrea d'Agostini on a stage"
            src="../images/bottom-section.png"
            placeholder="tracedSVG"
            layout="fullWidth"
            className="bg-image"
          />
        )}
      </Wrapper>
      <BottomText content={content} />
    </>
  );
};

export default BottomSection;
