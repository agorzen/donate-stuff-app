import React, { Component } from "react";
import styled from "styled-components";

import facebook from "../../assets/assets/Facebook.svg";
import instagram from "../../assets/assets/Instagram.svg";
import { NavLink, withRouter } from "react-router-dom";

const options = {
  activeClass: "active",
  spy: true,
  smooth: true,
  offset: 50,
  duration: 500
};

const FooterComp = styled.div`
  width: 50%;
  display: flex;
  margin-right: 142px;
  justify-content: space-between;
  float: right;
`;

const Copyrighted = styled.div`
  font-size: 16px;
  height: 30px;
  text-align: center;
  font-weight: 400;
  padding-top: 10px;
`;
const Social = styled.div`
  display: flex;
`;
const Facebook = styled.div`
  background: url(${facebook});
  width: 30px;
  height: 30px;
`;
const Instagram = styled.div`
  background: url(${instagram});
  width: 30px;
  height: 30px;
  margin-left: 10px;
`;
function Footer() {
  return (
    <>
      <FooterComp>
        <Copyrighted>Copyright by CodersLab</Copyrighted>
        <Social>
          <NavLink to="/notfound" {...options}>
            <Facebook />
          </NavLink>
          <NavLink to="/notfound" {...options}>
            <Instagram />
          </NavLink>
        </Social>
      </FooterComp>
    </>
  );
}

export default Footer;
