import React, { useState } from "react";
import Header from "../../components/Header/Header";
import "./Search.css";
import {
  StyledButton1,
  StyledButton2,
  StyledButton3,
  StyledButton4,
} from "../../components/Review/Reviewcomponent";
import MyList from "../Mylist";

export default function TravelPlaceInfo() {
  const [places, setPlaces] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [list, setList] = useState([]);
  const [showMyList, setShowMyList] = useState(false); 

  const fetchData = async () => {
    try {
      const response = await fetch( `https://apis.data.go.kr/B551011/KorService1/searchKeyword1?serviceKey=pPM2VrV7r3IwxAFI87FWbmu2fU3hy8eCslZyp39YTXfpn8XgrMIRLmMYpk6Vvpic15howkhlzMKfieBlGbOhPA%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A&keyword=${searchText}&contentTypeId=12`);

      const data = await response.json();
      const items = data.response.body.items.item;

      setPlaces(items);
    } catch (error) {
      setPlaces([]);
    }
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < places.length - 1 ? prevIndex + 1 : 0
    );
  };
  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = () => {
    fetchData();
  };

  const handleSearchText = (text) => {
    setSearchText(text);
  };

  const handleAddToList = () => {
    if (currentIndex >= 0 && currentIndex < places.length) {
      const selectedPlace = places[currentIndex];
      console.log("선택한 장소:", selectedPlace);
      console.log("목록에 추가 전 - list:", list);

      setList((prevList) => [...prevList, { title: selectedPlace.title, type: 'place' }]);
  
      console.log("목록에 추가 후 - list:", list);
    }
  };

  return (
    <div>
      <Header showMyList={showMyList} setShowMyList={setShowMyList} />
      <div className="Main">
        <aside className="SearchForm">
          <label>
            <input
              className="SearchText"
              type="text"
              value={searchText}
              onChange={handleSearch}
              placeholder="여행지를 검색하세요"
            />
            <button
              type="button"
              className="SearchButton"
              onClick={handleSubmit}
            >
              <img src="./img/search.png" className="searchImg" alt="찾기이미지" />
            </button>
          </label>
          <div className="buttonList">
            <StyledButton1
              style={{ width: "10pc", height: "3pc", margin: "5px 10px" }}
              onClick={() => handleSearchText("가로수길")}
            >
              가로수길
            </StyledButton1>
            <StyledButton2
              style={{
                width: "10pc",
                height: "3pc",
                margin: "5px 10px",
                flexGrow: "1",
              }}
              onClick={() => handleSearchText("해수욕장")}
            >
              해수욕장
            </StyledButton2>
            <StyledButton3
              style={{ width: "10pc", height: "3pc", margin: "5px 10px" }}
              onClick={() => handleSearchText("박물관")}
            >
              박물관
            </StyledButton3>
            <StyledButton4
              style={{ width: "5pc", height: "3pc", margin: "5px 10px" }}
              onClick={() => handleSearchText("숲")}
            >
              숲
            </StyledButton4>
            <StyledButton2
              style={{ width: "10pc", height: "3pc", margin: "5px 10px" }}
              onClick={() => handleSearchText("카페")}
            >
              카페
            </StyledButton2>

            <StyledButton4
              style={{ width: "10pc", height: "3pc", margin: "5px 10px" }}
              onClick={() => handleSearchText("수산 시장")}
            >
              수산 시장
            </StyledButton4>
          </div>
        </aside>
        <main>
          <button onClick={handlePrevious} className="prevButton">
            <img src="./img/prev.png" alt="prev" />
          </button>
          <ul>
            {places &&
              places.map((place, index) => (
                <li
                  key={index}
                  className={index === currentIndex ? "visible" : "hidden"}
                >
                  <img
                    src={place.firstimage}
                    alt={`${place.title}`}
                    className="placeImg"
                  />
                  <h2>{place.title}</h2>
                  <p>
                    주소: {place.addr1} {place.addr2}
                  </p>
                  <button onClick={handleAddToList} className="addToListButton">
                    추가하기
                  </button>
                </li>
              ))}
          </ul>
          <button onClick={handleNext} className="nextButton">
            <img src="./img/next.png" alt="next" />
          </button>
        </main>
      </div>
      <MyList
      places={places}
      setPlaces={setPlaces}
      myList={list}
      setMyList={setList}
      />
    </div>
  );
}
