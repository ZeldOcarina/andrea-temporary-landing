import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";
import isEmail from "validator/lib/isEmail";
import respond from "../styles/abstracts/mediaqueries";

import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

const Wrapper = styled.form`
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-items: center;
  width: 100%;
  font-size: 1.8rem;

  ${respond(
    "tab-land",
    css`
      grid-template-rows: repeat(2, 1fr);
      row-gap: 1.5rem;
    `
  )}
  ${respond(
    "phone-port",
    css`
      grid-template-rows: 8rem max-content;
      row-gap: 1.5rem;
    `
  )}

  .input,
  .button {
    height: 5rem;
  }

  .input {
    padding-left: 1rem;
    width: 100%;
    grid-column: 1 / 6;
    grid-row: 1 / 2;

    ${respond(
      "tab-land",
      css`
        grid-column: 4 / 8;
      `
    )}
    ${respond(
      "tab-port",
      css`
        grid-column: 1 / 10;
      `
    )}
    ${respond(
      "phone-port",
      css`
        grid-column: 1 / 10;
      `
    )}
  }

  .button {
    background-color: var(--black);
    color: var(--white);
    border: none;
    cursor: pointer;
    grid-column: 6/8;
    grid-row: 1/2;
    width: 100%;
    text-transform: uppercase;

    ${respond(
      "tab-land",
      css`
        grid-column: 8 / 12;
      `
    )}
    ${respond(
      "tab-port",
      css`
        grid-column: 10 / 15;
      `
    )}
  }

  .checkbox {
    transform: scale(2);
    grid-column: 8 / 9;
    grid-row: 1 / 2;

    ${respond(
      "tab-land",
      css`
        grid-row: 2 / 3;
        grid-column: 4 / 5;
      `
    )}
    ${respond(
      "tab-port",
      css`
        grid-row: 2 / 3;
        grid-column: 1 / 3;
      `
    )}
  }

  .label {
    font-size: 1.4rem;
    grid-column: 9 / 15;
    grid-row: 1 / 2;
    line-height: 1.3;

    ${respond(
      "tab-land",
      css`
        grid-row: 2 / 3;
        grid-column: 5 / 12;
      `
    )}
    ${respond(
      "tab-port",
      css`
        grid-row: 2 / 3;
        grid-column: 3 / 15;
      `
    )}
  }

  a {
    font-weight: 700;
  }
`;

const SubscriptionForm = ({ success, setSuccess, cta, privacy }) => {
  const [formData, setFormData] = useState({ email: "", privacy: false });
  const recaptchaRef = useRef();

  function handleChange(e) {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!formData.privacy)
      return setSuccess({ success: false, message: "Please accept our privacy policy", hidden: false });
    if (!isEmail(formData.email))
      return setSuccess({ success: false, message: "Please enter a valid email", hidden: false });

    try {
      const token = await recaptchaRef.current.executeAsync();
      await axios.post("/api/recaptcha-check", { token });
    } catch (err) {
      if (err.response.status === 403)
        return setSuccess({ success: false, message: "Invalid Recaptcha", hidden: false });
      setSuccess({ success: false, message: "Unknown error", hidden: false });
    }

    const response = await fetch(
      "https://services.leadconnectorhq.com/hooks/LC2A6xmpdZgvgHohkfkV/webhook-trigger/d49cefc5-e177-474f-a9b2-25fc7de477f9",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          event_name: "newsletter_subscription",
          contact: { email: formData.email },
        }),
      }
    );

    if (response.status !== 200)
      setSuccess({ success: false, message: "Unknown error. Please try again later.", hidden: false });

    setSuccess({ success: true, message: "Form correctly sent. Thank you!", hidden: false });
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <ReCAPTCHA
        ref={recaptchaRef}
        style={{ zIndex: 600 }}
        size="invisible"
        sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY}
      />
      <input
        type="email"
        name="email"
        className="input"
        id="subscriber-email"
        placeholder="Email"
        onChange={handleChange}
        value={formData.email}
      />
      <input
        type="checkbox"
        className="checkbox"
        name="privacy"
        id="privacy"
        onChange={handleChange}
        value={formData.privacy}
        checked={formData.privacy}
      />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="privacy" className="label" dangerouslySetInnerHTML={{ __html: privacy }} />

      <button type="submit" className="button">
        {cta}{" "}
      </button>
    </Wrapper>
  );
};

export default SubscriptionForm;
