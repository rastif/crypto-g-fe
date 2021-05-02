import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 70%;
  padding: 25px;
  margin: 15px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * {
    margin: 10px;
  }
  @media (min-width: 700px) {
    width: 200px;
  }
`;

const Card: React.FC = ({ children, ...props }) => (
  <Wrapper {...props}>{children}</Wrapper>
);

export default Card;
