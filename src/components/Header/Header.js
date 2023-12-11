import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MyList from "../../pages/Mylist";

const HeaderStyle = styled.div`
  width: 100%;
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

// 배경색 투명 여부 props
const Header = ({ transparent }) => {
  // showMyList 상태 관리
  const [showMyList, setShowMyList] = useState(false);
  // 사용자의 리스트 표시 여부를 토글
  const handleToggleMyList = () => {
    setShowMyList(!showMyList);
  };

  return (
    <>
      <HeaderStyle transparent={transparent}>
        <nav>
          <HeaderLink to="/search">Search</HeaderLink>
          <HeaderLink to="/Chatgpt">Chat GPT</HeaderLink>
          <HeaderLink to="/">
            <HeaderImg src="./img/logoImg.png" alt="로고이미지" />
          </HeaderLink>
          <HeaderLink onClick={handleToggleMyList}>My List</HeaderLink>
          <HeaderLink to="/Review">Review</HeaderLink>
        </nav>
      </HeaderStyle>
      {showMyList && <MyList />}
    </>
  );
};

export default Header;
