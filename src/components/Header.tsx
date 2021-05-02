import React from "react";
import styled from "styled-components";
import Link from "components/Link";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
`;

const Header: React.FC = () => (
  <Wrapper>
    <Link href="/">
      <h1>CryptoG 🔥</h1>
    </Link>
    <Link href="/history">
      <p>history</p>
    </Link>
  </Wrapper>
);

export default Header;
