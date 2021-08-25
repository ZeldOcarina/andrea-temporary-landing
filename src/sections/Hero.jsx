import React, { useContext } from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

import Button from "../components/Button";
import BrushedTitle from "../components/BrushedTitle";

import LanguageContext from "../context/languageContext";

const Wrapper = styled.header`
  position: relative;
  top: 0;
  height: 90vh;

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
    top: 0;
    transform: translateY(4rem);
    margin-left: 15%;
  }

  .pre-title,
  .title {
    color: white;
    margin: 0;
    z-index: 100;
    font-size: 8rem;
    text-align: center;
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
  }
`;

const Hero = () => {
  const { languageData } = useContext(LanguageContext);

  while (!languageData.hero?.cta) return "";
  const {
    hero: { cta, iconsTitle, preTitle, title },
  } = languageData;

  return (
    <Wrapper>
      <StaticImage
        src="../images/hero.png"
        placeholder="tracedSVG"
        layout="fullWidth"
        alt="Andrea d'Agostini talking on a stage in front of a crowded place"
        className="hero-image"
      />
      <div className="container content-container">
        <h1 className="pre-title">{preTitle}</h1>
        <BrushedTitle className="companies">{title}</BrushedTitle>
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
