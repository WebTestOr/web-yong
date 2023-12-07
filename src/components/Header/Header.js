import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderStyle = styled.div`
  width: 1920px;
  height: 176px;
  text-align: center;
  background: ${(props) => (props.transparent ? "transparent" : "#8FAAD2")};
`;

const HeaderLink = styled(Link)`
  color: #000;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;
  margin-right: 93px;
`;

const HeaderImg = styled.img`
  vertical-align: middle;
`;

const Header = ({ transparent }) => {
  return (
    <>
      <HeaderStyle transparent={transparent}>
        <nav>
          <HeaderLink to="/TravelInfo">Search</HeaderLink>
          <HeaderLink to="/Chatgpt">Chat GPT</HeaderLink>
          <HeaderImg src="./img/logoImg.png" alt="로고이미지" />
          <HeaderLink to="/services">My List</HeaderLink>
          <HeaderLink to="/Review">Review</HeaderLink>
        </nav>
      </HeaderStyle>
    </>
  );
};

export default Header;
