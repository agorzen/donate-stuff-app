import React from "react";

import styled from "styled-components";

const Space = styled.div`
  width: 100%;
  height: 384px;
  background: #fad648;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: space-around;
  padding-right: 142px;
  margin: 0 auto;
`;
const Column = styled.div`
  text-align: center;
  width: 334px;
  height: 252px;
`;
const Number = styled.div`
  height: 122px;
  margin-top: 2px;
  font-size: 90px;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.7);
  text-align: center;
  color: #3c3c3c;
`;
const Title = styled.div`
  height: 24px;
  font-size: 18px;
  width: 100%;
  text-transform: uppercase;
  margin-top: 10px;
  display: inline-block;
  text-align: center;
  color: #3c3c3c;
`;
const Description = styled.div`
  height: 68px;
  width: 100%;
  font-size: 16px;
  margin-top: 10px;
  letter-spacing: -0.32px;
  color: #3c3c3c;
  display: inline-block;
  text-align: center;
  line-height: 1.5em;
`;

function ThreeColumns({ items }) {
  return (
    <Space>
      {items.map((item, index) => (
        <FormatColumn
          key={index}
          number={item.number}
          title={item.title}
          description={item.description}
        />
      ))}
    </Space>
  );
}

function FormatColumn({ number, title, description }) {
  return (
    <Column>
      <Number>{number}</Number>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Column>
  );
}

export default ThreeColumns;
