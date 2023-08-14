import React from "react";
import styled from "styled-components";

const Wrapper = styled.a`
  color: var(--black);
  background-color: var(--color-primary);
  padding: 1.8rem 3rem;
  display: block;
  text-align: center;
  font-weight: 700;
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;
  border-radius: 10px;

  &:hover {
    transform: scale(1.03);
  }
`;

const Button = ({ children, href, className }) => {
  return (
    <Wrapper href={href} className={className}>
      {children}
    </Wrapper>
  );
};

export default Button;
