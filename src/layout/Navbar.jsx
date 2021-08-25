import React, { useContext } from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import LanguageSelector from "../components/LanguageSelector";

import LanguageContext from "../context/languageContext";

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

const Navbar = ({ location }) => {
  const languageData = useContext(LanguageContext);
  console.log(languageData);
  return (
    <Wrapper>
      <div className="container">
        <Link to={`/${languageData.language}`}>
          <StaticImage
            src="../images/logo.png"
            layout="constrained"
            width={300}
            placeholder="blurred"
            alt="Andrea d'Agostini Logo"
          />
        </Link>

        <LanguageSelector location={location} />
      </div>
    </Wrapper>
  );
};

export default Navbar;
