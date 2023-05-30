import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { useMediaQuery } from "react-responsive";

const Wrapper = styled.footer`
  background-color: var(--black);
  color: var(--white);
  padding: 4rem;
  text-align: center;

  a {
    color: white;
  }

  span {
    display: block;
    margin-bottom: 1rem;
  }
`;

const Footer = () => {
  const isPhonePort = useMediaQuery({
    query: "(max-width: 28.125em)",
  });

  return isPhonePort ? (
    <Wrapper>
      <span>&copy; {new Date().getFullYear()} Andrea d'Agostini. All Rights Reserved.</span>
      <Link to="/en/privacy">Privacy Policy</Link>
    </Wrapper>
  ) : (
    <Wrapper>
      &copy; {new Date().getFullYear()} Andrea d'Agostini. All Rights Reserved. |{" "}
      <Link to="/en/privacy">Privacy Policy</Link>
    </Wrapper>
  );
};

export default Footer;
