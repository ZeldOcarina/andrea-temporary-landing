import React, { useRef, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { getImage } from "gatsby-plugin-image";
import { GatsbyImage } from "gatsby-plugin-image";

import Button from "./Button";

const Wrapper = styled.article`
  position: relative;
  width: 100%;
  padding: 10%;

  & > * {
    position: relative;
    z-index: 10;
  }

  .card-container {
    width: 50%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    ${({ even }) => {
      if (!even) return;
      return css`
        margin-left: auto;
        align-items: flex-end;
        text-align: right;
      `;
    }}}
  }

  .logo {
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
  }
`;

const BusinessCard = ({ content, cta, link, extraContent, extraLogo, logo, box, even, name, color }) => {
  const [height, setHeight] = useState(0);
  const gatsbyLogo = getImage(logo.childrenImageSharp[0]);
  const gatsbyBoxImage = getImage(box.childrenImageSharp[0]);
  const gatsbyExtraLogo = getImage(extraLogo?.childrenImageSharp ? extraLogo?.childrenImageSharp[0] : undefined);
  const card = useRef(null);

  useEffect(() => {
    setHeight(card.current.offsetWidth);
  }, []);

  return (
    <Wrapper ref={card} style={{ height }} even={even}>
      <div className="card-container">
        <GatsbyImage image={gatsbyLogo} alt={`${name} logo`} className="logo" />
        <p className={color === "white" ? "description text-white" : "description"}>{content}</p>
        <a href={link} className="link">
          <Button className="btn">{cta}</Button>
        </a>
      </div>
      <GatsbyImage image={gatsbyBoxImage} alt={`${name} background`} className="bg-image" />
    </Wrapper>
  );
};

export default BusinessCard;
