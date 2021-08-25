import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Wrapper = styled.footer`
  background-color: var(--black);
  color: var(--white);
  padding: 4rem;
  text-align: center;

  a {
    color: white;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      &copy; {new Date().getFullYear()} Andrea d'Agostini. All Rights Reserved. |{" "}
      <Link to="/en/privacy">Privacy Policy</Link>
    </Wrapper>
  );
};

export default Footer;
