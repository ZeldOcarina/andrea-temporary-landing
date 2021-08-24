import React, { useState } from "react";
import styled from "styled-components";

import SocialIcons from "../components/SocialIcons";
import SubscriptionForm from "../components/SubscriptionForm";

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

  .alert-message {
    position: absolute;
    top: 0;
    left: 0;
    font-weight: 700;
    padding: 1.5rem;
    border-radius: 3px;
    left: 15%;
    top: 2rem;
  }

  .alert-message.green {
    background-color: #c5e3c3;
  }

  .alert-message.red {
    background-color: #e3c3c3;
  }
`;

const NewsletterSubscriber = () => {
  const [success, setSuccess] = useState({ success: false, message: "" });

  return (
    <Wrapper className="newsletter-block">
      <div className="container">
        <h2 className="title">RIMANI AGGIORNATO CON LE NOSTRE NEWS ED EVENTI</h2>
        <div className="form-container">
          <SubscriptionForm success={success} setSuccess={setSuccess} />
        </div>
        <SocialIcons />
      </div>
      {success.message && (
        <p className={success.success ? "alert-message green" : "alert-message red"}>{success.message}</p>
      )}
    </Wrapper>
  );
};

export default NewsletterSubscriber;
