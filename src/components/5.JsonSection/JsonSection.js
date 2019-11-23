import React, { Component } from "react";
import styled from "styled-components";
import decoration from "../../assets/assets/Decoration.svg";

const Space = styled.div.attrs({
  id: "fundationAndOrganization"
})`
  height: 920px;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
`;
const MainBoard = styled.div`
  width: 1344px;
`;
const Title = styled.div`
  margin-top: 50px;
  font-size: 30px;
`;
const Decoration = styled.img`
  background: url(${decoration});
  margin-top: 25px;
  width: 255px;
  height: 33px;
`;
const Buttons = styled.div`
  width: 100%;
  height: 57px;
  justify-content: space-around;
  display: flex;
`;
const Button = styled.div`
  height: 33px;
  width: 100px;
  font-size: 1rem;
  text-align: center;
  justify-content: center;
  padding: 20px 20px;
  background: white;
  margin-top: 40px;
  box-shadow: 0px;
  border: 1px solid gray;
  color: gray;
  :hover {
    border: 0.75px solid #fad648;
    color: black;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 560px;
  margin-top: 70px;
`;
const MainDesc = styled.p`
  width: 640px;
  height: 94px;
  padding-left: 27%;
  padding-top: 5%;
  font-size: 22px;
`;
const Ul = styled.ul`
  width: 100%;
  height: 100%;
  list-style: none;
`;
const Li = styled.li`
  width: 90%;
  border: 0 solid #b7b7b7;
  border-bottom-width: 1px;
  display: inline-block;
  margin-bottom: 5px;
`;
const FirstLine = styled.div`
  justify-content: space-between;
  display: flex;
`;
const Head = styled.p`
  width: 336px;
  font-size: 26px;
  text-align: left;
  line-height: 0.5rem;
`;
const SubHead = styled.p`
  width: 572px;
  font-size: 18px;
  text-align: left;
`;
const Little = styled.p`
  width: 379px;
  font-size: 18px;
  color: gray;
  padding-top: 5px;
  text-align: right;
`;
const Pagination = styled.div`
  width: 150px;
  height: 50px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: space-around;
`;
const One = styled.p`
  padding-top: 20px;
  width: 40px;
  height: 40px;
  color: grey;
  text-align: center;
  justify-content: center;
  border: 1px solid lightgrey;
  margin-bottom: 20px;
  :hover {
    border: 0.75px solid #fad648;
    color: black;
  }
`;
class JsonSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fundations: {
        items: []
      },
      current: "Fundacjom"
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.current !== this.state.current) {
      console.log(this.state.current);
      this.fetchData();
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  handleClick = name => () => {
    this.setState({
      current: name
    });
  };

  fetchData() {
    fetch(`http://localhost:3001/fundations/?name=${this.state.current}`)
      .then(response => response.json())
      .then(fundations => {
        console.log(fundations);
        this.setState({
          fundations: fundations[0]
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    console.log(this.state.fundations);
    return (
      <Space>
        <MainBoard>
          <Title>Komu pomagamy?</Title>
          <Decoration />
          <Buttons>
            <Button onClick={this.handleClick("Fundacjom")}>Fundajom</Button>
            <Button onClick={this.handleClick("Organizacjom pozarządowym")}>
              Organizacjom <br /> pozarządowym
            </Button>
            <Button onClick={this.handleClick("Lokalnym zbiórkom")}>
              Lokalnym <br /> zbiórkom
            </Button>
          </Buttons>
          <Container>
            <MainDesc>{this.state.fundations.desc}</MainDesc>
            <Ul>
              {this.state.fundations.items.map(fun => (
                <Li key={fun.header}>
                  <FirstLine>
                    <Head>{fun.header}</Head>
                    <Little>{fun.textright}</Little>
                  </FirstLine>
                  <SubHead>{fun.subheader}</SubHead>
                </Li>
              ))}
            </Ul>
          </Container>
          <Pagination>
            <One>1</One>
            <One>2</One>
            <One>3</One>
          </Pagination>
        </MainBoard>
      </Space>
    );
  }
}

export default JsonSection;
