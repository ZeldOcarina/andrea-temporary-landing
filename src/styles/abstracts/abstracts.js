import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
      // COLORS
    --body-background: #ffffff;
    --color-primary: #F0B300;
    --color-primary-dark: #007BFF;
;   --black: #000000;
    --white: #ffffff;

    //FONT FAMILY
    --title-font: "Oswald", serif;
    --alternative-font: "Rock Salt", sans-serif;
    --body-font: "Lato", sans-serif;
    --bold: 700;

    // FONT-SIZES
    --basic-font-size: 1.8rem;
    --mobile-font-size: 1.5rem;

    --big-title: 4.8rem;
    --title-font-size: 2.8rem;
    --mobile-title-font-size: 3rem;
    --small-title: 2.5rem;
    --big-text: 2rem;

    //SECTIONS
    --section-width: 70%;
    --laptop-container: 80%;

    --gutter: 2rem;
    --big-gutter: 4rem;
  }
`;
