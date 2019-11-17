import React from "react";
import styled from "styled-components";

import { Link } from "react-scroll"; //menu dolne
import { NavLink, withRouter } from "react-router-dom";
import decoration from "../../assets/assets/Decoration.svg";

///options for scroll (link):
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
//navbar-section:
const NavbarSection = styled.div.attrs({
  id: "start"
})`
  float: right;
`;
const UlList = styled.ul`
  height: 36px;
  list-style: none;
  display: flex;
  justify-content: flex-end;
  margin-right: 142px;
`;
const ListItem = styled.li`
  height: 24px;
  width: 100%;
  margin: 10%;
  font-size: 1rem;
  text-align: center;
  color: black;
  padding: 10px 10px;
  :hover {
    border: 0.75px solid #fad648;
  }
`;
const OlList = styled.ol`
  top: 90px;
  width: 683px;
  height: 42px;
  list-style: none;
  display: flex;
  float: right;
  justify-content: flex-end;
  justify-content: space-between;
  margin-right: 142px;
`;
const OlListItem = styled.li`
  height: 24px;
  font-size: 18px;
  text-align: center;
  padding: 10px 10px;
  :hover {
    border: 0.75px solid #fad648;
  }
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
  }
`;
const Package = styled.div`
  width: 672px;
  display: flex;
  justify-content: space-around;
`;

function HeaderNavbar(props) {
  function handleFirstButtonClick() {
    console.log("hello");
    props.history.push("/login");
  }
  function handleSecondButtonClick() {
    console.log("elo");
    props.history.push("/registration");
  }
  return (
    <>
      <NavbarSection>
        <UlList>
          <NavLink to="/login" {...options}>
            <ListItem>Zaloguj</ListItem>
          </NavLink>
          <NavLink to="/registration" {...options}>
            <ListItem>Załóż konto</ListItem>
          </NavLink>
        </UlList>
        <OlList>
          <OlListItem>
            <Link to="start" {...options}>
              Start
            </Link>
          </OlListItem>
          <OlListItem>
            <Link to="whatAbout" {...options}>
              O co chodzi?
            </Link>
          </OlListItem>
          <OlListItem>
            <Link to="aboutUs" {...options}>
              O nas
            </Link>
          </OlListItem>
          <OlListItem>
            <Link to="fundationAndOrganization" {...options}>
              Fundacja i organizacje
            </Link>
          </OlListItem>
          <OlListItem>
            <Link to="contact" {...options}>
              Kontakt
            </Link>
          </OlListItem>
        </OlList>
        <ButtonSection>
          <Title>
            <p>
              Zacznij pomagać!
              <br /> Oddaj niechciane rzeczy w dobre ręce
            </p>
          </Title>
          <Decoration />
          <Package>
            <Button onClick={handleFirstButtonClick}>
              oddaj <br />
              rzeczy
            </Button>
            <Button onClick={handleSecondButtonClick}>
              zorganizuj
              <br /> zbiórkę
            </Button>
          </Package>
        </ButtonSection>
      </NavbarSection>
    </>
  );
}

export default HeaderNavbar;
