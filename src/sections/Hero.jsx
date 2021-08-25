import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { useMediaQuery } from "react-responsive";
import respond from "../styles/abstracts/mediaqueries";

import Button from "../components/Button";
import BrushedTitle from "../components/BrushedTitle";

import LanguageContext from "../context/languageContext";

const Wrapper = styled.header`
  position: relative;
  top: 0;
  height: 90vh;

  ${respond(
    "tab-port",
    css`
      height: 100vh;
    `
  )}
  ${respond(
    "phone-land",
    css`
      height: auto;
      padding-bottom: 6rem;
    `
  )}

  & > * {
    position: relative;
  }

  .hero-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .content-container {
    width: 40%;
    left: 0;
    transform: translateY(-57%);
    top: 50%;
    margin-left: 15%;

    ${respond(
      "tab-land",
      css`
        width: 75%;
        margin-left: 0;
        left: 50%;
        transform: translateX(-50%) translateY(-60%);
      `
    )}
    ${respond(
      "phone-land",
      css`
        top: 0;
        transform: translateX(-50%) translateY(0);
      `
    )}
    ${respond(
      "phone-port",
      css`
        width: 100%;
      `
    )}
  }

  .pre-title,
  .title {
    color: white;
    margin: 0;
    z-index: 100;
    font-size: 8rem;
    text-align: center;

    ${respond(
      "phone-port",
      css`
        font-size: 2.5rem;
      `
    )}
  }

  .pre-title {
    font-weight: 400;
  }

  .features {
    display: flex;
    justify-content: center;
    color: var(--white);
    border: 1px solid white;
    border-top: none;
    border-radius: 20px;
    padding: 4rem;
    position: relative;
    margin-top: 7rem;
  }

  .features-text {
    text-align: center;
    position: absolute;
    top: -1.5rem;
    left: 50%;
    transform: translateX(-50%);
    min-width: max-content;

    ${respond(
      "phone-port",
      css`
        font-size: 1.3rem;
      `
    )}
  }

  .forbes {
    width: 100px;
  }

  .logos {
    z-index: 5;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .logo {
    width: max-content;

    &:not(:last-child) {
      margin-right: 1.5rem;
    }
  }

  .hero-link {
    margin: 4rem auto 0 auto;

    ${respond(
      "phone-port",
      css`
        font-size: 1.6rem;
        line-break: loose;
        max-width: 100%;
        text-align: center;
      `
    )}
  }
`;

const Hero = () => {
  const { languageData } = useContext(LanguageContext);

  const isTabLand = useMediaQuery({
    query: "(max-width: 75em)",
  });
  const isPhoneLand = useMediaQuery({
    query: "(max-height: 400px)",
  });
  const isTabPort = useMediaQuery({
    query: "(max-width: 56.25em)",
  });
  const isPhonePort = useMediaQuery({
    query: "(max-width: 28.125em)",
  });

  function setImage() {
    if (isPhoneLand) {
      console.log("phone-land");
      return (
        <StaticImage
          src={"../images/hero-phone-land.png"}
          placeholder="tracedSVG"
          layout="fullWidth"
          alt="Andrea d'Agostini talking on a stage in front of a crowded place"
          className="hero-image"
        />
      );
    }
    if (isTabPort) {
      return (
        <StaticImage
          src={"../images/hero-tab.png"}
          placeholder="tracedSVG"
          layout="fullWidth"
          alt="Andrea d'Agostini talking on a stage in front of a crowded place"
          className="hero-image"
        />
      );
    }
    if (isTabLand) {
      return (
        <StaticImage
          src={"../images/hero-tab.png"}
          placeholder="tracedSVG"
          layout="fullWidth"
          alt="Andrea d'Agostini talking on a stage in front of a crowded place"
          className="hero-image"
        />
      );
    }
    return (
      <StaticImage
        src={"../images/hero.png"}
        placeholder="tracedSVG"
        layout="fullWidth"
        alt="Andrea d'Agostini talking on a stage in front of a crowded place"
        className="hero-image"
      />
    );
  }

  while (!languageData.hero?.cta) return "";
  const {
    hero: { cta, iconsTitle, preTitle, title },
  } = languageData;

  // if (isTabLand) console.log("tab-land");
  // if (isTabPort) console.log("tab-port");
  // if (isPhoneLand) console.log("phone-land");
  // if (isPhonePort) console.log("phone-port");

  return (
    <Wrapper>
      {setImage()}
      <div className="container content-container">
        <h1 className="pre-title">{preTitle}</h1>
        <BrushedTitle className="companies" fontSize={isPhonePort ? "4rem" : undefined}>
          {title}
        </BrushedTitle>
        <div className="features">
          <span className="features-text">{iconsTitle}</span>
          <div className="logos">
            <StaticImage
              src="../images/features/forbes.png"
              placeholder="tracedSVG"
              layout="constrained"
              width={100}
              className="forbes logo"
              alt="forbes logo"
            />
            <StaticImage
              src="../images/features/vanity-fair.png"
              placeholder="tracedSVG"
              layout="constrained"
              width={100}
              className="logo"
              alt="vanity fair logo"
            />
            <StaticImage
              src="../images/features/glamour.svg"
              placeholder="tracedSVG"
              layout="constrained"
              width={100}
              className="logo"
              alt="glamour logo"
            />
            <StaticImage
              src="../images/features/economist.png"
              placeholder="tracedSVG"
              layout="constrained"
              width={100}
              className="logo"
              alt="the economist logo"
            />
            <StaticImage
              src="../images/features/yahoo-finance.png"
              placeholder="tracedSVG"
              layout="constrained"
              width={100}
              className="logo"
              alt="yahoo finance logo"
            />
            <StaticImage
              src="../images/features/marketwatch.png"
              placeholder="tracedSVG"
              layout="constrained"
              width={100}
              className="logo"
              alt="market finance logo"
            />
            <StaticImage
              src="../images/features/medium.png"
              placeholder="tracedSVG"
              layout="constrained"
              width={100}
              className="logo"
              alt="medium logo"
            />
            <StaticImage
              src="../images/features/vocal.png"
              placeholder="tracedSVG"
              layout="constrained"
              width={100}
              className="logo"
              alt="vocal logo"
            />
            <StaticImage
              src="../images/features/my-trending-stories.png"
              placeholder="tracedSVG"
              layout="constrained"
              width={100}
              className="logo"
              alt="my trending stories logo"
            />
          </div>
        </div>
        <Button href="https://google.com" className="hero-link">
          {cta}
        </Button>
      </div>
    </Wrapper>
  );
};

export default Hero;
