import React from "react";
import styled from "styled-components";
import Header from "components/Header";

const Main = styled.main`
  max-width: 900px;
  padding: 10px;
  margin: auto;
`;

const Layout: React.FC = ({ children }) => (
  <div>
    <Header />
    <Main>{children}</Main>
    {/* <footer>FOOTER CONTENT</footer> */}
  </div>
);

export default Layout;
