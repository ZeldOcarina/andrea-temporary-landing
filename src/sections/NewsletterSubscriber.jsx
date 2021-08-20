import React from "react";
import styled from "styled-components";

import SocialIcons from "../components/SocialIcons";

const Wrapper = styled.section`
  background-color: var(--color-primary);
  padding: 2rem;

  .container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    justify-items: center;
    align-content: center;
    justify-content: center;
  }

  .title {
    grid-column: 1 / 4;
    font-size: 2.2rem;
  }

  .form-container {
    grid-column: 5 / 9;
    width: 100%;

    .form {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      width: 100%;
      height: 5rem;
      font-size: 1.8rem;

      .input {
        padding-left: 1rem;
      }

      .button {
        background-color: var(--black);
        color: var(--white);
        border: none;
        padding: 0 1rem;
      }
    }
  }

  .social-icons-container {
    grid-column: 9 / 13;
  }

  .icon {
    font-size: 3rem;
  }
`;

const NewsletterSubscriber = () => {
  return (
    <Wrapper className="newsletter-block">
      <div className="container">
        <h2 className="title">RIMANI AGGIORNATO CON LE NOSTRE NEWS ED EVENTI</h2>
        <div className="form-container">
          <form className="form">
            <input type="text" name="email" className="input" id="subscriber-email" placeholder="Email" />
            <button type="submit" className="button">
              SUBSCRIBE{" "}
            </button>
          </form>
        </div>
        <SocialIcons />
      </div>
    </Wrapper>
  );
};

export default NewsletterSubscriber;
