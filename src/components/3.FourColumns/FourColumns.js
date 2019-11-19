import React from "react";
import styled from "styled-components";
import { NavLink, withRouter } from "react-router-dom";

import decoration from "../../assets/assets/Decoration.svg";
//icon:
import iconOne from "../../assets/assets/Icon-1.svg";
import iconTwo from "../../assets/assets/Icon-2.svg";
import iconThree from "../../assets/assets/Icon-3.svg";
import iconFour from "../../assets/assets/Icon-4.svg";

const options = {
  activeClass: "active",
  spy: true,
  smooth: true,
  offset: 50,
  duration: 500
};

const Space = styled.div.attrs({
  id: "whatAbout"
})`
  width: 100%;
  height: 550px;
  background: white;
  display: block;
  align-items: center;
  justify-items: center;
  text-align: center;
  padding-right: 142px;
  margin: 0 auto;
  margin-bottom: 40px;
`;
const TitleM = styled.div`
  margin-top: 20px;
  font-size: 30px;
`;
const Decoration = styled.img`
  background: url(${decoration});
  margin-top: 25px;
  width: 255px;
  height: 33px;
  margin-bottom: 10px;
`;
const Column = styled.div`
  text-align: center;
  justify-content: center;
  width: 334px;
  height: 252px;
`;
const Icons = styled.div`
  margin-top: 40px;
  background: #f0f1f1;
  width: 100%;
  height: 100px;
  padding-top: 25px;
  padding-left: 5%;
  display: flex;
  justify-content: space-around;
  padding-bottom: 20px;
  padding-right: 142px;
`;
const IconOne = styled.img`
  background: url(${iconOne}) no-repeat center/cover;
  width: 83px;
  height: 83px;
  margin-right: 8%;
`;
const IconTwo = styled.img`
  background: url(${iconTwo}) no-repeat center/cover;
  width: 83px;
  height: 83px;
  margin-right: 8%;
`;
const IconThree = styled.img`
  background: url(${iconThree}) no-repeat center/cover;
  width: 83px;
  height: 83px;
  margin-right: 8%;
`;
const IconFour = styled.img`
  background: url(${iconFour}) no-repeat center/cover;
  width: 83px;
  height: 83px;
  margin-right: 8%;
`;
const Title = styled.div`
  font-size: 18px;
  width: 164px;
  padding-top: 25px;
  color: #3c3c3c;
  height: 24px;
  margin-bottom: 25px;
  text-align: center;
  justify-content: center;
  justify-items: center;
`;
const Hr = styled.div`
  height: 0.5px;
  width: 60px;
  margin-left: 50px;
  background: #3c3c3c;
  margin-bottom: 15px;
`;
const Description = styled.div`
  letter-spacing: -0.32px;
  font-size: 16px;
  text-align: center;
  color: #3c3c3c;
  width: 164px;
  line-height: 1.5em;
  padding-top: 10px;
`;
const Content = styled.div`
  background: #f0f1f1;
  width: 100%;
  height: 150px;
  display: flex;
  padding-left: 5%;
  align-items: center;
  justify-items: center;
  justify-content: space-around;
  padding-right: 142px;
`;
const Button = styled.button`
  margin-top: 15px;
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
function FourColumns({ itemsNext }) {
  return (
    <Space>
      <TitleM>4 proste kroki</TitleM>
      <Decoration />
      <Icons>
        <IconOne />
        <IconTwo />
        <IconThree />
        <IconFour />
      </Icons>
      <Content>
        {itemsNext.map((item, index) => (
          <FormatColumn
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </Content>
      <NavLink to="/registration" {...options}>
        <Button>
          oddaj <br /> rzeczy
        </Button>
      </NavLink>
    </Space>
  );
}
function FormatColumn({ title, description }) {
  return (
    <Column>
      <Title>{title}</Title>
      <Hr />
      <Description>{description}</Description>
    </Column>
  );
}

export default FourColumns;
