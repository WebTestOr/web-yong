import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Search from "./Search.css";

export default function TravelPlaceInfo() {
  const [places, setPlaces] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [displayCount, setDisplayCount] = useState(5);

  const handleLoadMore = () => {
    setDisplayCount((prevCount) => prevCount + 1);
  };
  const fetchData = async () => {
    try {
      const response = await fetch();
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
      <Header />
      <div className="Main">
        <aside className="SearchForm">
          <input
            className="SearchText"
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="여행지를 검색하세요"
          />
          <button type="button" className="SearchButton" onClick={handleSubmit}>
            <img src="./img/search.png" />
          </button>
        </aside>
        <main>
          <ul>
            {places &&
              places.slice(0, displayCount).map((place, index) => (
                <li key={index}>
                  <img src={place.firstimage} alt={`이미지_${place.title}`} />
                  <h2>{place.title}</h2>
                  <p>
                    주소: {place.addr1} {place.addr2}
                  </p>
                  <p>지역 코드: {place.areacode}</p>
                  <p>주소1: {place.addr1}</p>
                </li>
              ))}
          </ul>
          {displayCount < places.length && (
            <button onClick={handleLoadMore}>Load More</button>
          )}
        </main>
      </div>
    </div>
  );
}
