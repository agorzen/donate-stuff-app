import React from "react";
// import styled, { css } from "styled-components";
import styled from "styled-components";

const Hello = styled.p`
  font-size: 30px;
`;
function Header() {
  return (
    <>
      <Hello>hello</Hello>
    </>
  );
}

// function Navbar(props) {
//   return <></>;
// }

export default Header;
