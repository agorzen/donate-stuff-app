import React from "react";
import styled from "styled-components";
import decoration from "../../assets/assets/Decoration.svg";
import Navbar from "./HeaderNavSection";
import { NavLink, withRouter } from "react-router-dom";

const options = {
  activeClass: "active",
  spy: true,
  smooth: true,
  offset: 50,
  duration: 500
};

const Space = styled.div.attrs({
  id: "logout"
})`
  width: 100%;
  background: white;
`;
const Container = styled.div`
  width: 100%;
  height: 963px;
  margin: 0 auto;
  justify-content: center;
  text-align: center;
  width: 499px;
  height: 963px;
`;
const Title = styled.div`
  font-size: 30px;
  margin-top: 260px;
`;
const Decoration = styled.img`
  background: url(${decoration});
  margin-top: 25px;
  margin-bottom: 45px;
  width: 255px;
  height: 33px;
`;
const Buttons = styled.div`
  margin-top: 40px;
  width: 499px;
  height: 328px;
  display: flex;
  justify-content: center;
`;

const Send = styled.button`
  height: 50px;
  width: 150px;
  font-size: 1rem;
  text-align: center;
  padding: 10px 10px;
  background: white;
  box-shadow: 0px;
  border: 1px solid gray;
  :hover {
    color: black;
    border: 0.75px solid #fad648;
  }
`;

function Logout() {
  return (
    <Space>
      <Navbar />
      <Container>
        <Title>
          Wylogowanie nastąpiło <br /> pomyślnie!
        </Title>
        <Decoration />
        <Buttons>
          <NavLink to="/" {...options}>
            <Send>Strona główna</Send>
          </NavLink>
        </Buttons>
      </Container>
    </Space>
  );
}
export default Logout;
