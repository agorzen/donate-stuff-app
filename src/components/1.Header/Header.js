import React from "react";
// import styled, { css } from "styled-components";
import styled from "styled-components";
import Navbar from "./HeaderNavbar";
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
  height: 963px;
  width: 885px;
`;

const NavBarWithRouter = withRouter(Navbar);

function Header() {
  return (
    <>
      <Space>
        <Hero />
        <NavBarWithRouter />
      </Space>
    </>
  );
}

export default Header;
