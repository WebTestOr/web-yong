import React from "react";
import "./Box.css";

function Box() {
  return (
    <div className="box-container">
      <div className="box">
        <div className="title">내가 원하는 장소를 검색하고싶다면?</div>
        <div className="content">search 페이지를 눌러 원하는 장소를 찾아보고 자신만의 리스트에 장소를 추가해보세요!</div>
      </div>
      <div className="box">
        <div className="title">Chat GPT에게 물어보세요 !</div>
        <div className="content">장소 찾기에 막막하신 당신, Chat GPT에게 물어보고 아이디어를 얻으세요 !</div>
      </div>
    </div>
  );
}

export default Box;


