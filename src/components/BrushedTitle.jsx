import React from "react";
import styled, { css } from "styled-components";

import brushSign from "../images/brush.svg";

const Wrapper = styled.div`
  position: relative;

  .brush {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    ${({ scale }) => {
      return css`
        transform: translate(-50%, -50%) scale(${scale || 1.5});
      `;
    }}
  }

  .title {
    position: relative;
    font-family: var(--alternative-font);
    font-size: 7rem;
    text-align: center;
    z-index: 50;
  }
`;

const BrushedTitle = ({ className, fontSize, children, scale }) => {
  return (
    <Wrapper className={className} scale={scale}>
      <h2 className="title" style={{ fontSize: fontSize ? fontSize : "7rem" }}>
        {children}
      </h2>
      <img src={brushSign} alt="decorative yellow brush sign" className="brush" />
    </Wrapper>
  );
};

export default BrushedTitle;
