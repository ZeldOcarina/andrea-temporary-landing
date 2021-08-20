import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  background-color: var(--black);
  color: var(--white);
  padding: 4rem;
  text-align: center;
`;

const Footer = () => {
  return <Wrapper>&copy; {new Date().getFullYear()} Andrea d'Agostini. All Rights Reserved. | Privacy Policy</Wrapper>;
};

export default Footer;
