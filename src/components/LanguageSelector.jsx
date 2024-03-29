import React, { useState, useEffect, useCallback } from "react";
import styled, { css } from "styled-components";
import { navigate } from "gatsby";
import { useMediaQuery } from "react-responsive";

import italyFlag from "../images/flags/it.svg";
import usFlag from "../images/flags/us.svg";
import { BsTriangleFill } from "react-icons/bs";
import LanguageContext from "../context/languageContext";

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  letter-spacing: 0;
  border: 1px solid white;
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  ${({ $activeMenu }) =>
    $activeMenu
      ? css`
          flex-direction: column-reverse;
          gap: 1rem;
        `
      : css`
          flex-direction: row;
        `}

  .icon {
    transform: rotate(180deg);
    width: 1.5rem;
  }

  .flag-item {
    display: flex;
    gap: 1rem;
  }

  .country-name {
    text-transform: uppercase;
  }
`;

const LanguageSelector = ({ location }) => {
  const isPhonePort = useMediaQuery({
    query: "(max-width: 28.125em)",
  });
  const { setLanguage } = React.useContext(LanguageContext);
  const [languages, setLanguages] = useState([
    {
      name: "english",
      abbreviation: "en",
      image: usFlag,
      active: true,
    },
    {
      name: "italian",
      abbreviation: "it",
      image: italyFlag,
      active: false,
    },
  ]);

  const [activeMenu, setActiveMenu] = useState(false);

  const activateLanguage = useCallback(
    (name, e) => {
      const newLanguages = languages.map((language) => {
        if (language.active) {
          setLanguage(language.abbreviation);
        }
        return {
          ...language,
          active: (language.active = language.name === name),
        };
      });

      setLanguages(newLanguages);
      navigate(`/${name[0] + name[1]}`);
    },
    [languages, setLanguage]
  );

  useEffect(() => {
    if (!location.pathname) return;
    if (location.pathname === "/en") {
      activateLanguage("english");
    } else if (location.pathname === "/it") {
      activateLanguage("italian");
    }
  }, [activateLanguage, location.pathname]);

  return (
    <Wrapper className="language-selector" onClick={() => setActiveMenu(!activeMenu)} $activeMenu={activeMenu}>
      {!activeMenu &&
        languages.map(({ name, image, active }, i) => {
          return (
            active && (
              <div key={i} className="flag-item">
                <img src={image} className="flag" alt={name} />
                {!isPhonePort && <span className="country-name">{name}</span>}
              </div>
            )
          );
        })}
      {activeMenu && (
        <div className="items-container">
          {languages.map(({ name, image }, i) => {
            return (
              // eslint-disable-next-line
              <div key={i} className="flag-item" role="listbox" onClick={(e) => activateLanguage(name, e)}>
                <img
                  src={image}
                  className={isPhonePort && i + 1 !== languages.length ? "flag mb-1" : "flag"}
                  alt={name}
                />
                {!isPhonePort && <span className="country-name">{name}</span>}
              </div>
            );
          })}
        </div>
      )}

      <BsTriangleFill className="icon" />
    </Wrapper>
  );
};

export default LanguageSelector;
