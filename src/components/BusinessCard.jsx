import React from "react";
import styled, { css } from "styled-components";
import { getImage } from "gatsby-plugin-image";
import { GatsbyImage } from "gatsby-plugin-image";

import respond from "../styles/abstracts/mediaqueries";

import Button from "./Button";

const StyledBusinessCard = styled.article`
  position: relative;
  width: 100%;
  padding: 10%;
  aspect-ratio: 1 / 1;

  @media only screen and (max-width: 750px) {
    aspect-ratio: unset;
  }

  & > * {
    position: relative;
    z-index: 10;
  }

  .card-container {
    width: 50%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;

    ${({ defaultAlignment }) => {
      if (defaultAlignment === "left") return;
      return css`
        margin-left: auto;
        align-items: flex-end;
        text-align: right;

        @media only screen and (max-width: 768px) {
          align-items: flex-start;
          text-align: left;
        }
      `;
    }}

    ${respond(
      "phone-port",
      css`
        width: 100%;
      `
    )}
  }

  .logo {
    max-width: ${({ maxWidth }) => {
      console.log(maxWidth);
      return maxWidth ? maxWidth : "unset";
    }};
    ${respond(
      "phone-port",
      css`
        /* width: 70%; */
        margin: 0 auto;

        img {
          object-fit: contain !important;
        }
      `
    )}
  }

  p {
    line-height: 1.5;
    margin-top: 4rem;
    font-size: 1.6rem;
  }

  .bg-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .link {
    margin-top: auto;
    z-index: 100;
  }

  .btn {
    margin-top: auto;
    z-index: 100;

    @media only screen and (max-width: 750px) {
      margin-top: 4rem;
      font-size: 1.4rem;
      padding: 2rem 3rem;
    }

    ${respond(
      "phone-port",
      css`
        margin-top: 3rem;
        font-size: 1.3rem;
        margin-left: auto;
        margin-right: auto;
      `
    )}
  }

  .content-link {
    font-weight: bold;
    color: var(--white);
  }
`;

const BusinessCard = ({ data: { content, cta, link, logo, box, name, color, defaultAlignment, maxWidth } }) => {
  const gatsbyLogo = getImage(logo.localFiles[0]);
  const gatsbyBoxImage = getImage(box.localFiles[0]);

  return (
    <StyledBusinessCard color={color} defaultAlignment={defaultAlignment} maxWidth={maxWidth}>
      <div className="card-container">
        <GatsbyImage image={gatsbyLogo} alt={`${name} logo`} className="logo" />
        <p
          className={color === "white" ? "description text-white" : "description"}
          dangerouslySetInnerHTML={{ __html: content }}
        ></p>
        {link && cta && (
          <Button className="btn" href={link}>
            {cta}
          </Button>
        )}
      </div>
      <GatsbyImage image={gatsbyBoxImage} alt={`${name} background`} className="bg-image" />
    </StyledBusinessCard>
  );
};

export default BusinessCard;
