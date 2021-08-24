import React, { useState, useRef } from "react";
import styled from "styled-components";
import isEmail from "validator/lib/isEmail";

import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

const Wrapper = styled.form`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 5rem;
  font-size: 1.8rem;
  grid-row-gap: 2rem;

  .input,
  .button {
    height: 5rem;
  }

  .input {
    padding-left: 1rem;
    grid-row: 1 / 2;
    grid-column: 1/4;
    width: 100%;
  }

  .checkbox {
    transform: scale(2);
    grid-row: 2/3;
    grid-column: 1/2;
  }

  .label {
    grid-column: 2 / 6;
    font-size: 1.4rem;
  }

  .button {
    background-color: var(--black);
    color: var(--white);
    border: none;
    padding: 0 1rem;
    cursor: pointer;
    grid-column: 4/6;
    grid-row: 1/2;
    width: 100%;
  }
`;

const SubscriptionForm = ({ success, setSuccess }) => {
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
      const tokenResponse = await axios.post("/api/recaptcha-check", { token });
    } catch (err) {
      if (err.response.status === 403)
        return setSuccess({ success: false, message: "Invalid Recaptcha", hidden: false });
    }

    const response = await fetch("https://sj-api.com/externalapp/track", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.GATSBY_SALESJET_KEY,
      },
      body: JSON.stringify({
        event_name: "newsletter_subscription",
        contact: { email: formData.email },
      }),
    });

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
      <label type="checkbox" name="privacy" htmlFor="privacy" className="label">
        I agree to this website Terms of Service and acknowledge its <a href="https://google.com">Privacy Policy</a>,
        including the cookie policy. I understand and agree that I will receive promotional content to my email by
        Andrea d'Agostini.
      </label>

      <button type="submit" className="button">
        SUBSCRIBE{" "}
      </button>
    </Wrapper>
  );
};

export default SubscriptionForm;
