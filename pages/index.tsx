import React from "react";
import styled from "styled-components";
import PopularRates from "components/popularRates/PopularRates";
import TradingInfo from "components/TradingInfo";

const H1 = styled.h1`
  text-align: center;
`;

const Home: React.FC = () => {
  return (
    <>
      <H1>Cryptocurrency on fire</H1>
      <PopularRates />
      <TradingInfo />
    </>
  );
};

export default Home;
