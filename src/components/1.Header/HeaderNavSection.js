import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll"; //menu dolne
import { NavLink, withRouter } from "react-router-dom";

const options = {
  activeClass: "active",
  spy: true,
  smooth: true,
  offset: 50,
  duration: 500
};

//navbar-section:
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
  list-style: none;
  text-align: center;
  color: black;
  margin-top: 10px;
  margin-right: 40px;
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
  list-style: none;
  text-decoration-line: none;
  padding: 10px 10px;
  :hover {
    border: 0.75px solid #fad648;
  }
`;

function Navbar(props) {
  return (
    <>
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
    </>
  );
}

export default Navbar;
