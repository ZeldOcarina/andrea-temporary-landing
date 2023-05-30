import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import respond from "../styles/abstracts/mediaqueries";

import LanguageSelector from "../components/LanguageSelector";

import LanguageContext from "../context/languageContext";

const Wrapper = styled.nav`
  color: var(--white);
  background-color: var(--black);
  padding: 4rem 0;

  ${respond(
    "phone-port",
    css`
      padding: 2rem 0;
    `
  )}

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${respond(
      "phone-port",
      css`
        flex-direction: column-reverse;
        gap: 3rem;
        align-items: flex-end;
      `
    )}
  }

  .ad-logo {
    ${respond(
      "phone-port",
      css`
        max-width: 100%;
        align-self: center;
      `
    )}
  }

  .flag {
    width: 3rem;

    ${respond(
      "phone-port",
      css`
        width: 4rem;
      `
    )}
  }
`;

const Navbar = ({ location }) => {
  const languageData = useContext(LanguageContext);

  return (
    <Wrapper>
      <div className="container">
        <div className="ad-logo">
          <Link to={`/${languageData.language}`}>
            <StaticImage
              src="../images/logo.png"
              layout="constrained"
              width={300}
              placeholder="blurred"
              alt="Andrea d'Agostini Logo"
            />
          </Link>
        </div>
        <LanguageSelector location={location} />
      </div>
    </Wrapper>
  );
};

export default Navbar;
