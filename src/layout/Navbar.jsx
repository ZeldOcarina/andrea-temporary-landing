import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

import LanguageSelector from "../components/LanguageSelector";

const Wrapper = styled.nav`
  color: var(--white);
  background-color: var(--black);
  padding: 4rem 0;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .flag {
    width: 3rem;
  }
`;

const Navbar = () => {
  return (
    <Wrapper>
      <div className="container">
        <StaticImage
          src="../images/logo.png"
          layout="constrained"
          width={300}
          placeholder="blurred"
          alt="Andrea d'Agostini Logo"
        />
        <LanguageSelector />
      </div>
    </Wrapper>
  );
};

export default Navbar;
