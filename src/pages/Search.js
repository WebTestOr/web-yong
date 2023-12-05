import React, { useState } from "react";
import axios from "axios";

export default function TravelPlaceSearch() {
  const [inputValue, setInputValue] = useState("");
  const [places] = useState([]);

  const searchPlaces = () => {
    const apiUrl = `https://apis.data.go.kr/B551011/KorService1/locationBasedList1?serviceKey=pPM2VrV7r3IwxAFI87FWbmu2fU3hy8eCslZyp39YTXfpn8XgrMIRLmMYpk6Vvpic15howkhlzMKfieBlGbOhPA%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A&mapX=126.981611&mapY=37.568477&radius=1000&contentTypeId=15`;

    axios.get(apiUrl);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="장소를 입력하세요"
      />
      <button onClick={searchPlaces}>검색</button>

      <div>
        {places.map((place, index) => (
          <div key={index}>
            <strong>{place.name}</strong>
            <br />
            {place.formatted_address}
          </div>
        ))}
      </div>
    </div>
  );
}
