import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.span`
  position: fixed;
  top: 5rem;
  right: 10rem;
  font-weight: 700;
  padding: 1.5rem;
  border-radius: 3px;
  z-index: 500;
  ${({ $successful }) => {
    return $successful
      ? css`
          background-color: #c5e3c3;
          color: darkgreen;
        `
      : css`
          background-color: #e3c3c3;
          color: darkred;
        `;
  }}
`;

const AlertMessage = ({ message, successful, setAlertState }) => {
  setTimeout(() => {
    setAlertState({ success: false, message: "", hidden: true });
  }, 3000);

  return <Wrapper $successful={successful}>{message}</Wrapper>;
};

export default AlertMessage;
