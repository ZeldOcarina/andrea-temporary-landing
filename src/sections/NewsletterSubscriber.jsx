import React, { useState, useContext } from "react";
import styled, { css } from "styled-components";
import respond from "../styles/abstracts/mediaqueries";

import SubscriptionForm from "../components/SubscriptionForm";
import AlertMessage from "../components/AlertMessage";

import LanguageContext from "../context/languageContext";

const Wrapper = styled.section`
  background-color: var(--color-primary);
  height: max-content;
  padding: 4rem 0;
  position: relative;

  .container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    justify-items: center;
    align-content: center;
    justify-content: center;

    ${respond(
      "tab-land",
      css`
        display: flex;
        flex-direction: column;
        gap: 2rem;
      `
    )}
  }

  .title {
    grid-column: 1 / 4;
    font-size: 2.2rem;
    text-transform: uppercase;
  }

  .form-container {
    grid-column: 4 / 13;
    width: 100%;
    ${respond(
      "phone-port",
      css`
        grid-column: 1 / 13;
      `
    )}
  }

  /* .social-icons-container {
    grid-column: 10 / 13;
  } */

  /* .icon {
    font-size: 3rem;
  } */
`;

const NewsletterSubscriber = () => {
  const [alertState, setAlertState] = useState({ success: false, message: "", hidden: true });

  const { languageData } = useContext(LanguageContext);

  while (!languageData.subscriptionForm?.title) return "";

  const {
    subscriptionForm: { title, cta, privacy },
  } = languageData;

  return (
    <Wrapper className="newsletter-block" id="form">
      <div className="container">
        <h2 className="title">{title}</h2>
        <div className="form-container">
          <SubscriptionForm success={alertState.success} setSuccess={setAlertState} cta={cta} privacy={privacy} />
        </div>
        {/* <SocialIcons /> */}
      </div>
      {alertState.message && (
        <AlertMessage
          message={alertState.message}
          successful={alertState.success}
          hidden={alertState.hidden}
          setAlertState={setAlertState}
        />
      )}
    </Wrapper>
  );
};

export default NewsletterSubscriber;
