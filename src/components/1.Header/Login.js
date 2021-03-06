import React, { Component } from "react";
import styled from "styled-components";
import decoration from "../../assets/assets/Decoration.svg";

import { NavLink, withRouter } from "react-router-dom";
import Navbar from "./HeaderNavSection";

const options = {
  activeClass: "active",
  spy: true,
  smooth: true,
  offset: 50,
  duration: 500
};

const Space = styled.div.attrs({
  id: "login"
})`
  background: white;
  width: 100%;
`;
const Container = styled.div`
  /* display: flex; */
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
const Formcontainer = styled.div`
  width: 384px;
  height: 258px;
  display: flex;
  margin: 0 auto;
  background: #f0f1f1;
`;
const Inputform = styled.input`
  width: 100%;
  margin: 1px;
  padding-top: 20px;
  border: 0 solid #b7b7b7;
  border-bottom-width: 1px;
  color: gray;
  background: #f0f1f1;
`;
const Labelform = styled.label`
  display: inline-block;
  font-size: 16px;
  margin-top: 30px;
  text-align: left;
  height: 62px;
`;
const Buttons = styled.div`
  margin-top: 40px;
  width: 499px;
  height: 328px;
  display: flex;
  justify-content: space-between;
`;

const Send = styled.button`
  height: 50px;
  width: 150px;
  font-size: 1rem;
  text-align: center;
  padding: 10px 10px;
  background: white;
  margin-top: 20px;
  box-shadow: 0px;
  border: 1px solid gray;
  :hover {
    border: 0.75px solid #fad648;
    color: black;
  }
`;

class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      email: "",
      password: "",
      errors: [],
      user: false
    };
  }

  handleEmailChange = e => {
    this.setState({
      email: e.target.value
    });
  };
  handlePasswordChange = e => {
    this.setState({
      password: e.target.value
    });
  };

  handleSubmit = e => {
    // const errors = validate(this.state.email, this.state.password);
    // const isDisabled = Object.keys(errors).some(x => errors[x]);
    // if (isDisabled) {
    //   e.preventDefault();
    //   return;

    e.preventDefault();

    const errors = [];
    if (this.state.email.length <= 2) {
      errors.push("Podany email jest nieprawidłowy");
    }
    if (this.state.password.length <= 6) {
      errors.push("Podane hasło jest za krótkie");
    }
    this.setState({ errors });
    ///////////////////////////////////////////do poprawy:
    // if (errors.length === 0) {
    //   FakeAPI.login({
    //     email: this.state.email,
    //     password: this.state.password
    //   })
    //     .then(user => {
    //       this.setState({ user });
    //     })
    //     .catch(err => {
    //       this.setState(state => ({
    //         errors: [...state.errors, err]
    //       }));
    //     });
    // }
  };
  render() {
    const { password, email, errors, user } = this.state;
    const form = (
      <Space>
        <Navbar />
        <Container>
          <Title>Zaloguj się</Title>
          <Decoration />
          <Formcontainer>
            <form method="get" onSubmit={e => this.handleSubmit(e)}>
              <Labelform>
                Email:
                <br />
                <Inputform
                  type="text"
                  name="email"
                  value={email}
                  onChange={e => this.handleEmailChange(e)}
                />
              </Labelform>
              <Labelform>
                Hasło:
                <br />
                <Inputform
                  type="text"
                  name="password"
                  value={password}
                  onChange={e => this.handlePasswordChange(e)}
                />
              </Labelform>
            </form>
          </Formcontainer>
          <Buttons>
            <NavLink to="/" {...options}>
              <Send>Zaloguj się</Send>
            </NavLink>
            <NavLink to="/registration" {...options}>
              <Send>Załóż konto</Send>
            </NavLink>
          </Buttons>
        </Container>
      </Space>
    );
    const greetings = <h1>Hello {user.name}</h1>;
    return (
      <>
        <ul style={{ color: "red" }}>
          {errors.map((x, i) => (
            <li key={i}>{x}</li>
          ))}
        </ul>
        {user ? greetings : form}
      </>
    );
  }
}

function validate(email, password) {
  return {
    email: email.length === 0,
    password: password.length === 0
  };
}

export default Login;
