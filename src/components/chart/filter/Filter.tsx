import React from "react";
import styled from "styled-components";
import CurrencySelector from "./CurrencySelector";
import TimeSelector from "./TimeSelector";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  @media (min-width: 500px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Filter: React.FC = () => {
  return (
    <Wrapper>
      <CurrencySelector />
      <TimeSelector />
    </Wrapper>
  );
};

export default Filter;
