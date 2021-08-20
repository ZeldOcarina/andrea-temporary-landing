import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 7rem;
  transform: translateY(-15rem);
  background-color: var(--white);
  margin-bottom: -10rem;

  p {
    line-height: 1.4;
    margin-bottom: 1.5rem;
  }
`;

const BottomText = () => {
  return (
    <Wrapper className="text-container container">
      <p>
        We aren&rsquo;t trying to build an &ldquo;agency&rdquo;. I am not looking for thousands of customers and I am
        not looking to build a big office with thousands of people. We like to build businesses and have the businesses
        we partner with have all the employees.
      </p>

      <p>
        So our structure is quite simple in its essence. We get contacted by businesses that want to accelerate their
        growth. They come to me through word of mouth with the desire to solve their fit-to-market analysis, then
        marketing structure and sales process, install a sales team and sales training, scale the business.
      </p>

      <p>
        We develop vertical competences in those industries and with that we usually end up partnering with the
        business. So we are a high end, high ticket exclusive growth team.
      </p>

      <p>
        The word Agency implies a service, which isn&rsquo;t exactly what we do, I like to build assets and work with my
        CEOs to structure their real growth. Very often my CEOs have to evolve their business model in order to scale
        their company and improve efficiency.
      </p>

      <p>
        One of the main characteristics of our activity is taking companies and have them break their 7 figures in less
        than 12 months and then scale from there with different codified business models. for those that are already at
        a million we help them break the 5mln in usually less than 24 month.
      </p>

      <p>
        I don&rsquo;t like to show off, don&rsquo;t like to attract that kind of attention and I like my privacy, a lot.
      </p>
      <p>
        Not even my good friends know much about our results, I have a policy to always always always appear as the
        small dog."
      </p>
    </Wrapper>
  );
};

export default BottomText;
