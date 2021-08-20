import React from "react";
import styled from "styled-components";
import { FaEnvelopeOpen, FaInstagram, FaYoutube, FaTwitter, FaLinkedin, FaFacebookF } from "react-icons/fa";

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  .social-icons-title {
    font-size: 2.2rem;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
  }
`;

const SocialIcons = () => {
  return (
    <Wrapper className="social-icons-container">
      <h2 className="social-icons-title">RESTA SEMPRE CONNESSO</h2>
      <ul>
        <li>
          <a href="https://www.facebook.com/mrdagostini">
            <FaFacebookF className="icon" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/andreadagostini/">
            <FaLinkedin className="icon" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/MrDagostini">
            <FaTwitter className="icon" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCpNMuu_0mdAZY9eeuNymiwQ?view_as=subscriber">
            <FaYoutube className="icon" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/mrdagostini/">
            <FaInstagram className="icon" />
          </a>
        </li>
        <li>
          <a href="https://mailto:supporto@adyproduction.com">
            <FaEnvelopeOpen />
          </a>
        </li>
      </ul>
    </Wrapper>
  );
};

export default SocialIcons;
