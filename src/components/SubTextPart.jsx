import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const StyledSubTextPart = styled.div`
  .content {
    display: flex;
    flex-direction: column;

    .title {
      color: ${({ $color }) => ($color === "white" ? "var(--white)" : "var(--body-color)")};
      margin-top: 2rem;
      margin-bottom: var(--gutter);
    }

    .logos {
      display: flex;
      align-items: center;
      gap: var(--gutter);

      .logo {
        --sub-text-part-logo-height: 4.5rem;

        @media only screen and (max-width: 1700px) {
          --sub-text-part-logo-height: 3.5rem;
        }
        height: var(--sub-text-part-logo-height);
        img {
          height: var(--sub-text-part-logo-height);
        }
      }
    }
  }
`;

const SubTextPart = ({ title, logos, color }) => {
  return (
    <StyledSubTextPart $color={color}>
      <div className="content">
        <p className="title">{title}</p>
        <div className="logos">
          {logos?.map((logo) => {
            return <GatsbyImage image={getImage(logo)} key={logo.id} alt="Awards" className="logo" />;
          })}
        </div>
      </div>
    </StyledSubTextPart>
  );
};

export default SubTextPart;
