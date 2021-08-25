import React from "react";
import styled, { css } from "styled-components";
import respond from "../styles/abstracts/mediaqueries";

const Wrapper = styled.div`
  padding: 7rem 7rem 0 7rem;
  transform: translateY(-30vh);
  background-color: var(--white);
  margin-bottom: -20vh;

  ${respond(
    "phone-port",
    css`
      padding: 5rem 1.5rem 0 1.5rem;
    `
  )}

  p {
    line-height: 1.4;
    margin-bottom: 1.5rem;
  }
`;

const BottomText = ({ content }) => {
  return <Wrapper className="text-container container" dangerouslySetInnerHTML={{ __html: content }}></Wrapper>;
};

export default BottomText;
