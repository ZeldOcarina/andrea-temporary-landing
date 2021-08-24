import React, { useState } from "react";
import styled from "styled-components";

import SocialIcons from "../components/SocialIcons";
import SubscriptionForm from "../components/SubscriptionForm";
import AlertMessage from "../components/AlertMessage";

const Wrapper = styled.section`
  background-color: var(--color-primary);
  height: max-content;
  padding: 8rem 0;
  position: relative;

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
    grid-column: 5 / 10;
    width: 100%;
  }

  .social-icons-container {
    grid-column: 10 / 13;
  }

  .icon {
    font-size: 3rem;
  }
`;

const NewsletterSubscriber = () => {
  const [alertState, setAlertState] = useState({ success: false, message: "", hidden: true });

  return (
    <Wrapper className="newsletter-block">
      <div className="container">
        <h2 className="title">RIMANI AGGIORNATO CON LE NOSTRE NEWS ED EVENTI</h2>
        <div className="form-container">
          <SubscriptionForm success={alertState.success} setSuccess={setAlertState} />
        </div>
        <SocialIcons />
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
