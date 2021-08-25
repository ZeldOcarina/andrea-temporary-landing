import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 7rem 7rem 0 7rem;
  transform: translateY(-30vh);
  background-color: var(--white);
  margin-bottom: -20vh;

  p {
    line-height: 1.4;
    margin-bottom: 1.5rem;
  }
`;

const BottomText = ({ content }) => {
  return <Wrapper className="text-container container" dangerouslySetInnerHTML={{ __html: content }}></Wrapper>;
};

export default BottomText;
