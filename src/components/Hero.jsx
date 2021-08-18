import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

import brushSign from "../images/brush.svg";

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
    width: 30%;
    left: 0;
    top: 0;
    transform: translateY(12rem);
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

  .title {
    position: relative;
    font-family: var(--alternative-font);
    font-size: 7rem;
  }

  .companies {
    position: relative;
  }

  .brush {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.5);
  }

  .features {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: max-content;
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
    width: max-content;
    margin: 0 auto;
  }

  .logo {
    width: max-content;

    &:not(:last-child) {
      margin-right: 1.5rem;
    }
  }

  .hero-link {
    position: relative;
    color: var(--black);
    background-color: var(--color-primary);
    padding: 2rem 4rem;
    display: block;
    width: max-content;
    font-weight: 700;
    margin: 4rem auto 0 auto;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.03);
    }
  }
`;

const Hero = () => {
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
        <h1 className="pre-title">We Scale</h1>
        <div className="companies">
          <h2 className="title">Companies</h2>
          <img src={brushSign} alt="decorative yellow brush sign" className="brush" />
        </div>
        <div className="features">
          <span className="features-text">Andrea's projects have been featured in</span>
          <div className="logos">
            <StaticImage
              src="../images/features/forbes.png"
              placeholder="tracedSVG"
              layout="constrained"
              width={100}
              className="forbes logo"
            />
            <StaticImage
              src="../images/features/glamour.png"
              placeholder="tracedSVG"
              layout="constrained"
              width={100}
              className="logo"
            />
            <StaticImage
              src="../images/features/vanity-fair.png"
              placeholder="tracedSVG"
              layout="constrained"
              width={100}
              className="logo"
            />
            <StaticImage
              src="../images/features/glamour.png"
              placeholder="tracedSVG"
              layout="constrained"
              width={100}
              className="logo"
            />
          </div>
        </div>
        <a href="https://google.com" className="hero-link">
          SCHEDULE A BREAKTHROUGH CALL
        </a>
      </div>
    </Wrapper>
  );
};

export default Hero;
