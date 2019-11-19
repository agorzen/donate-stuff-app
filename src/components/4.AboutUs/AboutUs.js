import React from "react";
import styled from "styled-components";

import people from "../../assets/assets/People.jpg";
import decoration from "../../assets/assets/Decoration.svg";
import signature from "../../assets/assets/Signature.svg";

const Space = styled.div.attrs({
  id: "aboutUs"
})`
  height: 935px;
  width: 100%;
  display: flex;
`;
const LeftSectionContent = styled.div`
  width: 50%;
  height: 935px;
  display: flex;
  justify-content: center;
  text-align: center;
  background: #f0f1f1;
`;
const RightSection = styled.img`
  background: url(${people}) no-repeat center/cover;
  height: 935px;
  width: 50%;
  display: right;
`;
const LeftContent = styled.div`
  width: 657px;
  justify-content: center;
  justify-items: center;
  text-align: center;
`;
const Title = styled.div`
  margin-top: 260px;
  font-size: 30px;
`;
const Decoration = styled.img`
  background: url(${decoration});
  margin-top: 25px;
  width: 255px;
  height: 33px;
`;
const Description = styled.div`
  text-align: center;
  height: 209px;
  width: 657px;
  letter-spacing: -0.6px;
  font-size: 30px;
  margin-top: 20px;
  line-height: 1.5em;
`;
const Signature = styled.img`
  background: url(${signature});
  width: 210px;
  height: 150px;
  float: right;
`;

function AboutUs() {
  return (
    <Space>
      <LeftSection />
      <RightSection />
    </Space>
  );
}

function LeftSection() {
  return (
    <LeftSectionContent>
      <LeftContent>
        <Title>O nas</Title>
        <Decoration />
        <Description>
          Nori grape silver beet broccoli kombu beet <br />
          greens faver bean potato guandong celery. Bunya <br /> nuts black-eyed
          prairie turnip leek lentil
          <br /> turnip greens parsnip.
        </Description>
        <Signature />
      </LeftContent>
    </LeftSectionContent>
  );
}

export default AboutUs;
