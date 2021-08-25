import React, { useRef, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { getImage } from "gatsby-plugin-image";
import { GatsbyImage } from "gatsby-plugin-image";
import { useMediaQuery } from "react-responsive";
import respond from "../styles/abstracts/mediaqueries";

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
    }}

    ${respond(
      "phone-port",
      css`
        width: 100%;
      `
    )}
    
  
  }
  }

  .logo {
    ${respond(
      "phone-port",
      css`
        width: 70%;
        margin: 0 auto;
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

    ${respond(
      "phone-port",
      css`
        margin-top: 3rem;
        font-size: 1.5rem;
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

const BusinessCard = ({ content, cta, link, extraContent, extraLogo, logo, box, even, name, color }) => {
  const isPhonePort = useMediaQuery({
    query: "(max-width: 28.125em)",
  });
  const [height, setHeight] = useState(0);
  const gatsbyLogo = getImage(logo.childrenImageSharp[0]);
  const gatsbyBoxImage = getImage(box.childrenImageSharp[0]);
  const gatsbyExtraLogo = getImage(extraLogo?.childrenImageSharp ? extraLogo?.childrenImageSharp[0] : undefined);
  const card = useRef(null);

  useEffect(() => {
    setHeight(card.current.offsetWidth);
  }, []);

  return (
    <Wrapper ref={card} style={{ height: isPhonePort ? "auto" : height }} even={!isPhonePort && even}>
      <div className="card-container">
        <GatsbyImage image={gatsbyLogo} alt={`${name} logo`} className="logo" />
        <p
          className={color === "white" ? "description text-white" : "description"}
          dangerouslySetInnerHTML={{ __html: content }}
        ></p>
        <Button className="btn" href={link}>
          {cta}
        </Button>
      </div>
      <GatsbyImage image={gatsbyBoxImage} alt={`${name} background`} className="bg-image" />
    </Wrapper>
  );
};

export default BusinessCard;
