import React from "react";
import styled from "styled-components";
import decoration from "../../assets/assets/Decoration.svg";
// import Navbar from "./HeaderNavSection";
import { NavLink, withRouter } from "react-router-dom";

const options = {
  activeClass: "active",
  spy: true,
  smooth: true,
  offset: 50,
  duration: 500
};

//decoration.svg:
const Decoration = styled.img`
  background: url(${decoration});
  margin-top: 25px;
  width: 255px;
  height: 33px;
`;
//buttons-section:
const ButtonSection = styled.div`
  width: 672px;
  height: 350px;
  text-align: center;
`;
const Title = styled.div`
  margin-top: 280px;
  width: 672px;
  height: 107px;
  text-align: center;
  font-size: 36px;
  p {
    line-height: 1.4em;
  }
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
    color: black;
  }
`;
const Package = styled.div`
  width: 672px;
  display: flex;
  justify-content: space-around;
`;
function HeaderButtonSection(props) {
  return (
    <ButtonSection>
      <Title>
        <p>
          Zacznij pomagać!
          <br /> Oddaj niechciane rzeczy w dobre ręce
        </p>
      </Title>
      <Decoration />
      <Package>
        <NavLink to="/login" {...options}>
          <Button>
            oddaj <br />
            rzeczy
          </Button>
        </NavLink>
        <NavLink to="/registration" {...options}>
          <Button>
            zorganizuj
            <br /> zbiórkę
          </Button>
        </NavLink>
      </Package>
    </ButtonSection>
  );
}
export default HeaderButtonSection;
