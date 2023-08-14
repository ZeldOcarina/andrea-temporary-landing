import React from "react";
import styled, { css } from "styled-components";
import { getImage } from "gatsby-plugin-image";
import { GatsbyImage } from "gatsby-plugin-image";

import respond from "../styles/abstracts/mediaqueries";

import Button from "./Button";
import SubTextPart from "./SubTextPart";
import BottomCardLogos from "./BottomCardLogos";

const StyledBusinessCard = styled.article`
  position: relative;
  width: 100%;
  padding: 10%;
  aspect-ratio: 1 / 1;

  @media only screen and (max-width: 490px) {
    aspect-ratio: unset;
    padding: ${({ $hasBottomLogosStripe }) => ($hasBottomLogosStripe ? "10% 10% 30% 10%" : "")};
  }
  @media only screen and (max-width: 430px) {
    padding: ${({ $hasBottomLogosStripe }) => ($hasBottomLogosStripe ? "10% 10% 40% 10%" : "")};
  }
  @media only screen and (max-width: 350px) {
    padding: ${({ $hasBottomLogosStripe }) => ($hasBottomLogosStripe ? "10% 10% 50% 10%" : "")};
  }

  & > * {
    position: relative;
    z-index: 10;
  }

  .card-container {
    width: 55%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;

    @media only screen and (max-width: 1700px) {
      ${({ $hasBottomLogosStripe }) => {
        return $hasBottomLogosStripe
          ? css`
              width: 80%;
            `
          : "";
      }}
    }
    @media only screen and (max-width: 580px) {
      ${({ $hasBottomLogosStripe }) => {
        return $hasBottomLogosStripe
          ? css`
              width: 100% !important;
            `
          : css`
              width: 65%;
            `;
      }}
    }
    @media only screen and (max-width: 520px) {
      ${({ $hasBottomLogosStripe }) => {
        return $hasBottomLogosStripe
          ? css`
              width: 80%;
            `
          : "";
      }}
    }

    ${({ $defaultAlignment }) => {
      if ($defaultAlignment === "left") return;
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
    max-width: ${({ $maxWidth }) => {
      return $maxWidth ? $maxWidth : "unset";
    }};

    @media only screen and (max-width: 1700px) {
      img {
        object-fit: contain !important;
      }
    }
    ${respond(
      "phone-port",
      css`
        /* width: 70%; */
        margin: 0 auto;
      `
    )}
  }

  p {
    line-height: 1.5;
    margin-top: var(--big-gutter);
    font-size: 1.6rem;

    @media only screen and (max-width: 1050px) {
      margin-top: var(--gutter);
    }
    @media only screen and (max-width: 900px) {
      margin-top: var(--big-gutter);
    }
    @media only screen and (max-width: 650px) {
      margin-top: var(--gutter);
    }
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
    margin-top: var(--big-gutter);
    z-index: 100;

    @media only screen and (max-width: 1050px) {
      margin-top: var(--gutter);
    }
    @media only screen and (max-width: 980px) {
      padding: 1rem 2rem;
    }
    @media only screen and (max-width: 900px) {
      margin-top: var(--big-gutter);
    }
    @media only screen and (max-width: 750px) {
      margin-top: 4rem;
      font-size: 1.4rem;
      padding: 2rem 3rem;
    }
    @media only screen and (max-width: 650px) {
      margin-top: var(--gutter);
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

const BusinessCard = ({
  data: {
    content,
    cta,
    link,
    logo,
    box,
    name,
    color,
    defaultAlignment,
    maxWidth,
    subTextTitle,
    subTextLogos,
    logos,
    logosTitle,
    logosBgColor,
    logosTextColor,
  },
}) => {
  const gatsbyLogo = getImage(logo.localFiles[0]);
  const gatsbyBoxImage = getImage(box.localFiles[0]);
  const hasBottomLogosStripe = !!(logos && logos.localFiles && logos.localFiles.length > 0);

  return (
    <StyledBusinessCard
      $color={color}
      $defaultAlignment={defaultAlignment}
      $maxWidth={maxWidth}
      $hasBottomLogosStripe={hasBottomLogosStripe}
    >
      <div className="card-container">
        <GatsbyImage image={gatsbyLogo} alt={`${name} logo`} className="logo" />
        <p
          className={color === "white" ? "description text-white" : "description"}
          dangerouslySetInnerHTML={{ __html: content }}
        ></p>
        {subTextTitle && subTextLogos && subTextLogos.localFiles && subTextLogos.localFiles.length > 0 && (
          <SubTextPart title={subTextTitle} logos={subTextLogos.localFiles} color={color} />
        )}
        {link && cta && (
          <Button className="btn" href={link}>
            {cta}
          </Button>
        )}
      </div>
      {hasBottomLogosStripe && (
        <BottomCardLogos
          logos={logos.localFiles}
          title={logosTitle}
          color={logosTextColor}
          bgColor={logosBgColor}
          maxWidth={maxWidth}
        />
      )}
      <GatsbyImage image={gatsbyBoxImage} alt={`${name} background`} className="bg-image" />
    </StyledBusinessCard>
  );
};

export default BusinessCard;
