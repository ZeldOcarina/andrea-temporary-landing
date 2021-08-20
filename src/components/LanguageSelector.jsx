import React, { useState } from "react";
import styled, { css } from "styled-components";

import italyFlag from "../images/flags/it.svg";
import usFlag from "../images/flags/us.svg";
import { BsTriangleFill } from "react-icons/bs";

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  letter-spacing: 0;
  border: 1px solid white;
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  ${({ activeMenu }) =>
    activeMenu
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

const LanguageSelector = (props) => {
  const [languages, setLanguages] = useState([
    {
      name: "english",
      image: usFlag,
      active: true,
    },
    {
      name: "italian",
      image: italyFlag,
      active: false,
    },
  ]);

  const [activeMenu, setActiveMenu] = useState(false);

  function activateLanguage(name, e) {
    const newLanguages = languages.map((language) => {
      return { name: language.name, image: language.image, active: (language.active = language.name === name) };
    });
    setLanguages(newLanguages);
  }

  return (
    <Wrapper className="language-selector" onClick={() => setActiveMenu(!activeMenu)} activeMenu={activeMenu}>
      {!activeMenu &&
        languages.map(({ name, image, active }, i) => {
          return (
            active && (
              <div key={i} className="flag-item">
                <img src={image} className="flag" alt={name} />
                <span className="country-name">{name}</span>
              </div>
            )
          );
        })}
      {activeMenu && (
        <div className="items-container">
          {languages.map(({ name, image, active }, i) => {
            return (
              // eslint-disable-next-line
              <div key={i} className="flag-item" role="listbox" onClick={(e) => activateLanguage(name, e)}>
                <img src={image} className="flag" alt={name} />
                <span className="country-name">{name}</span>
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
