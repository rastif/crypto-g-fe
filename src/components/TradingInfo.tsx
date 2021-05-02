import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #1652f0;
  margin-top: 50px;
  padding: 25px;
  border-radius: 8px;
  text-align: center;
  & > h2,
  p {
    color: white;
  }
`;

const TradingInfo: React.FC = () => (
  <Wrapper>
    <h2>When's the best time to buy?</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </Wrapper>
);

export default TradingInfo;
