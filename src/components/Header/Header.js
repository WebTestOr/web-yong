import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MyList from "../../pages/Mylist";

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

const HeaderImgLink = styled(Link)`
  display: inline-block;
`;

const HeaderImg = styled.img`
  vertical-align: middle;
`;

const Header = ({ transparent }) => {
  const [showMyList, setShowMyList] = useState(false);

  const handleToggleMyList = () => {
    setShowMyList(!showMyList);
  };

  return (
    <>
      <HeaderStyle transparent={transparent}>
        <nav>
          <HeaderLink to="/search">Search</HeaderLink>
          <HeaderLink to="/Chatgpt">Chat GPT</HeaderLink>
          <HeaderImgLink to="/">
            <HeaderImg src="./img/logoImg.png" alt="로고이미지" />
          </HeaderImgLink>
          <HeaderLink onClick={handleToggleMyList}>My List</HeaderLink>
          <HeaderLink to="/Review">Review</HeaderLink>
        </nav>
      </HeaderStyle>
      {showMyList && <MyList />}
    </>
  );
};

export default Header;
