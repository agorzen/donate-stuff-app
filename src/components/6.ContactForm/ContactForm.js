import React, { Component } from "react";
import styled from "styled-components";
// import { NavLink, withRouter } from "react-router-dom";

import { Link } from "react-scroll";
import formphoto from "../assets/assets/Background-Contact-Form.jpg";
import decoration from "../assets/assets/Decoration.svg";
import facebook from "../assets/assets/Facebook.svg";
import instagram from "../assets/assets/Instagram.svg";

const options = {
  activeClass: "active",
  spy: true,
  smooth: true,
  offset: 50,
  duration: 500
};

const Space = styled.div.attrs({
  id: "contact"
})`
  height: 1026px;
  width: 100%;
  display: inline-block;
`;
const LeftSection = styled.img`
  background: url(${formphoto});
  background-color: rgba(255, 255, 255, 0.5);
  background-blend-mode: overlay;
  height: 1026px;
  width: 50%;
`;
const Footer = styled.div`
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
const RightSection = styled.div`
  width: 50%;
  height: 100%;
  justify-content: center;
  justify-items: center;
  text-align: center;
  float: right;
`;
const Formcontainer = styled.div`
  width: 530px;
  height: 327px;
  margin: 0 auto;
  display: flex;
`;
const Title = styled.div`
  font-size: 30px;
  margin-top: 260px;
`;
const Decoration = styled.img`
  background: url(${decoration});
  margin-top: 25px;
  margin-bottom: 25px;
  width: 255px;
  height: 33px;
`;

//FORM:
const Send = styled.button`
  height: 50px;
  width: 150px;
  font-size: 1rem;
  text-align: center;
  padding: 10px 10px;
  background: white;
  float: right;
  margin-top: 20px;
  margin-right: 4px;
  box-shadow: 0px;
  border: 1px solid gray;
  color: gray;
  :hover {
    border: 0.75px solid #fad648;
    color: black;
  }
`;
const Inputform = styled.input`
  width: 254px;
  margin: 1px;
  padding-top: 20px;
  border: 0 solid #b7b7b7;
  border-bottom-width: 1px;
  color: lightgray;
`;
const Labelform = styled.label`
  display: inline-block;
  font-size: 16px;
  margin-top: 30px;
  text-align: left;
  height: 62px;
`;
const LabelformText = styled.label`
  display: inline-block;
  font-size: 16px;
  margin-left: 4px;
  margin-top: 40px;
  text-align: left;
  height: 62px;
`;
const Textareaform = styled.textarea`
  width: 510px;
  padding-top: 20px;
  display: inline-block;
  border: 0 solid #b7b7b7;
  border-bottom-width: 1px;
  color: lightgray;
`;

class HomeContact extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      email: "",
      textarea: "",
      errors: [],
      user: false
    };
  }
  ///////////////////////FETCH:
  // componentDidMount() {
  //   this.fetchData();
  // }
  // fetchData() {
  //   fetch(``)
  //     .then(response => response.json())
  //     .then();
  //     }
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  handleNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };
  handleEmailChange = e => {
    this.setState({
      email: e.target.value
    });
  };
  handleTextareaChange = e => {
    this.setState({
      textarea: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = [];
    if (this.state.name.length <= 3) {
      //tu->przynajmniej 3 znaki
      errors.push("Podane imię jest nieprawidłowe");
    }
    if (this.state.email.length <= 6) {
      errors.push("Podany email jest nieprawidłowy");
    }
    if (this.state.textarea.length <= 120) {
      errors.push("Wiadomość musi mieć co najmniej 120 znaków");
    }
    this.setState({ errors });
  };

  render() {
    const { name, email, textarea, errors, user } = this.state;
    const form = (
      <Space>
        <LeftSection />
        <RightSection>
          <Title>Skontaktuj się z nami</Title>
          <Decoration />
          <Formcontainer>
            <form
              method="get"
              form
              method="get"
              onSubmit={e => this.handleSubmit(e)}
            >
              <Labelform>
                Wpisz swoje imię:
                <br />
                <Inputform
                  type="text"
                  name="name"
                  placeholder="Krzysztof"
                  value={name}
                  onChange={e => this.handleNameChange(e)}
                />
              </Labelform>
              <Labelform>
                Wpisz swój email:
                <br />
                <Inputform
                  type="text"
                  name="email"
                  placeholder="abc@gmail.com"
                  value={email}
                  onChange={e => this.handleEmailChange(e)}
                />
              </Labelform>
              <LabelformText>
                Wpisz swoją wiadomość:
                <br />
                <Textareaform
                  type="text"
                  name="textarea"
                  rows="4"
                  value={textarea}
                  onChange={e => this.handleTextareaChange(e)}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque tristique posuere viverra. Pellentesque
                  sollicitudin nulla nisi, in cursus diam cursus non. Donec eu
                  fringilla ligula, eget molestie est.
                </Textareaform>
              </LabelformText>
              <Link to="start" {...options}>
                <Send>Wyślij</Send>
              </Link>
            </form>
          </Formcontainer>
        </RightSection>
        <Footer>
          <Copyrighted>Copyright by CodersLab</Copyrighted>
          <Social>
            <Facebook />
            <Instagram />
          </Social>
        </Footer>
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

export default HomeContact;
