import React, { useState, useEffect } from "react";

const TravelPlaceInfo = () => {
  const [places, setPlaces] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://apis.data.go.kr/B551011/KorService1/searchKeyword1?serviceKey=pPM2VrV7r3IwxAFI87FWbmu2fU3hy8eCslZyp39YTXfpn8XgrMIRLmMYpk6Vvpic15howkhlzMKfieBlGbOhPA%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A&keyword=${searchTerm}&contentTypeId=12`
      );
      if (!response.ok) {
        throw new Error("데이터를 불러오는 중 문제가 발생했습니다.");
      }

      const data = await response.json();
      const items = data.response.body.items.item;

      setPlaces(items);
      setError(null);
    } catch (error) {
      console.error("데이터 요청 중 오류 발생:", error);
      setPlaces([]);
      setError("데이터를 불러오는 중 문제가 발생했습니다.");
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = () => {
    fetchData();
  };

  return (
    <div>
      <h1>여행지 정보</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="여행지를 검색하세요"
      />
      <button onClick={handleSubmit}>찾기</button>
      {error && <p>{error}</p>}
      <ul>
        {places &&
          places.map((place, index) => (
            <li key={index}>
              <h2>{place.title}</h2>
              <p>
                주소: {place.addr1} {place.addr2}
              </p>
              <p>지역 코드: {place.areacode}</p>
              <p>주소1: {place.addr1}</p>
              <img src={place.firstimage} alt={`이미지_${index}`} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TravelPlaceInfo;
