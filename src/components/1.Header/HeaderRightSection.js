import React from "react";
import styled from "styled-components";
import HeaderButtonSection from "./HeaderButtonSection";
import Navbar from "./HeaderNavSection";

const WholeSpace = styled.div.attrs({
  id: "start"
})`
  float: right;
`;

function RightSection(props) {
  return (
    <>
      <WholeSpace>
        <Navbar />
        <HeaderButtonSection />
      </WholeSpace>
    </>
  );
}

export default RightSection;
