import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 7rem 7rem 0 7rem;
  transform: translateY(-30vh);
  background-color: var(--white);
  margin-bottom: -20vh;

  p {
    line-height: 1.4;
    margin-bottom: 1.5rem;
  }
`;

const BottomText = () => {
  return (
    <Wrapper className="text-container container">
      <p>
        We aren&rsquo;t trying to build an &ldquo;agency&rdquo;.
        <br />
        I am not looking for thousands of customers, nor am I looking to build a big office with thousands of people.
        <br />
        We like to build businesses, and those businesses we partner with have all the employees.
      </p>
      <p>
        So our structure is quite simple in its essence.
        <br />
        We get contacted by businesses that want to accelerate their growth.
        <br />
        growth.
        <br />
        They come to me through word of mouth with the desire to solve their fit-to-market analysis, marketing structure
        and sales process. Then we install a sales team and sales training, and in turn, scale the business.
      </p>
      <p>
        We develop vertical competences in those industries and partner with the business.
        <br />
        So we are a high end, high ticket exclusive growth team.
      </p>
      <p>
        The word agency implies a service, which isn’t exactly what we do. I like to build assets and work with my CEOs
        to structure their real growth, and very often they have to evolve their business model in order to scale their
        company and improve efficiency.
      </p>
      <p>
        One of our main characteristics is breaking 7 figures for a company in less than 12 months, and then scale from
        there with different codified business models. For those that already broke a million, we help them break 5
        million in usually less than 24 months.
      </p>
      <p>Marketing has changed. It's a product, not a service.</p>
      <p>
        We focus on businesses with durable advantages and unique entrepreneurs to accelerate and participate towards
        their success. We do not operate as separate groups, we are an integrated model.
      </p>
      <p>It's imperative to spot the company's inefficiencies and generate an expert machine.</p>
      <p>We select businesses through our inner circle process and program.</p>
      <p>We learn their ability to execute and survive on their feet.</p>
      <p>We check their business skills and get them into the 7 figure game and beyond.</p>
      <p>We partner with them in global expansion programs.</p>
      <p>We exit the business once ready.</p>
    </Wrapper>
  );
};

export default BottomText;
