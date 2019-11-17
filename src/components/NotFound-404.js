import React from "react";
// import styled, { css } from "styled-components";
import styled from "styled-components";

import { NavLink, withRouter } from "react-router-dom";

const options = {
  activeClass: "active",
  spy: true,
  smooth: true,
  offset: 50,
  duration: 500
};
const Space = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  text-align: center;
`;
const Error = styled.p`
  font-size: 50px;
  text-align: center;
  width: 100%center;
`;
const Button = styled.button`
  margin-top: 80px;
  width: 310px;
  height: 120px;
  text-align: center;
  justify-items: center;
  font-size: 36px;
  border: 1px solid gray;
  background: white;
  text-transform: uppercase;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.7);
  :hover {
    border: 0.75px solid #fad648;
  }
`;
function NotFound() {
  return (
    <Space>
      <Error>404</Error>
      <Error>Not Found</Error>
      <NavLink to="/" {...options}></NavLink>
      <Button>HOME</Button>
      <NavLink />
    </Space>
  );
}

export default NotFound;
