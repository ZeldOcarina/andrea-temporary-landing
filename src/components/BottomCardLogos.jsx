import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const StyledBottomCardLogos = styled.div`
  --bottom-card-logos-title-color: ${({ $textColor }) => ($textColor ? $textColor : "#ffffff")};

  background-color: ${({ $bgColor }) => ($bgColor ? $bgColor : "#000000")};
  color: var(--bottom-card-logos-title-color);
  width: 100%;
  position: absolute !important;
  bottom: 0;
  left: 0;
  padding: 2rem 10%;

  .content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .title {
    color: var(--bottom-card-logos-title-color);

    @media only screen and (max-width: 1950px) {
      font-size: 1.6rem;
    }
    @media only screen and (max-width: 1850px) {
      display: none;
    }
    @media only screen and (max-width: 1630px) {
      display: block;
    }
    @media only screen and (max-width: 1300px) {
      text-align: center;
    }
    @media only screen and (max-width: 1170px) {
      display: none;
    }
    @media only screen and (max-width: 900px) {
      display: block;
    }
    @media only screen and (max-width: 650px) {
      display: none;
    }
  }

  .logos {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    @media only screen and (max-width: 1710px) {
      justify-content: center;
      gap: var(--gutter);
    }

    .logo {
      --logos-height: 4.3rem;

      @media only screen and (max-width: 1720px) {
        --logos-height: 3.5rem;
      }
      @media only screen and (max-width: 1630px) {
        --logos-height: 4.3rem;
      }
      @media only screen and (max-width: 1300px) {
        --logos-height: 3rem;
      }
      @media only screen and (max-width: 1000px) {
        --logos-height: 2rem;
      }
      @media only screen and (max-width: 900px) {
        --logos-height: 4.3rem;
      }
      @media only screen and (max-width: 650px) {
        --logos-height: 3rem;
      }
      @media only screen and (max-width: 490px) {
        --logos-height: 3rem;
      }

      height: var(--logos-height);

      img {
        height: var(--logos-height);
      }
    }
  }
`;

const BottomCardLogos = ({ logos, title, bgColor, color }) => {
  return (
    <StyledBottomCardLogos $bgColor={bgColor} $textColor={color}>
      <div className="content">
        <h5 className="title">{title}</h5>
        <div className="logos">
          {logos.map((logo) => {
            return <GatsbyImage key={logo.id} image={getImage(logo)} alt="Award" className="logo" />;
          })}
        </div>
      </div>
    </StyledBottomCardLogos>
  );
};

export default BottomCardLogos;
