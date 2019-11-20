import React from "react";

import styled from "styled-components";
import HeaderRightSection from "./HeaderRightSection";

import { NavLink, withRouter } from "react-router-dom";
import bg from "../../assets/assets/Home-Hero-Image.jpg";

const Space = styled.div`
  height: 963px;
  width: 100%;
  float: left;
`;
//hero-img:
const Hero = styled.img`
  background: url(${bg}) no-repeat center/cover;
  height: 100%;
  width: 50%;
`;

const RightSection = withRouter(HeaderRightSection);

function Header() {
  return (
    <>
      <Space>
        <Hero />
        <RightSection />
      </Space>
    </>
  );
}

export default Header;
