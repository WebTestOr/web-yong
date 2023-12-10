import React, { useState, useEffect } from 'react';
import './Carousel.css'; 

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const images = [
    {
      url: "https://localsegye.co.kr/news/data/20181123/p1065606094021438_835_thum.jpg",
      location: "강원도 정선 하이원 스키장"
    },
    {
      url: "https://i.namu.wiki/i/5ql2njneZCxFmtM0UvqHjLfFtRUGYSdTzaOt7iH2bRusXN3PGIbr_BjhxIuwYrCKZlUqc3nXOEA2hj0_L1XAtA.webp",
      location: "경상북도 포항 호미곶 해맞이 광장"
    },
    {
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/ac/d9/c4/caption.jpg?w=1200&h=1200&s=1",
      location: "경기도 용인 한택 식물원"
    },
    {
      url: "https://t1.daumcdn.net/cfile/tistory/9911A54D5A9DEC3D20",
      location: "강원도 홍천 비발디 파크 온천"
    },
    {
      url: "https://mblogthumb-phinf.pstatic.net/MjAyMjExMTRfODUg/MDAxNjY4NDEzOTk1MjU4.7ldFo8BIZlyYhzxkRLPnN8XOW9fuRxHQ6VgPlq-Dshcg.hBl7cKsU9KMfIm1R50xmuRoyfDMYH4Kr01TPYCyqNgcg.JPEG.ecolives/%EC%A3%BC%EC%84%9D_2022-11-14_171944.jpg?type=w800",
      location: "강원도 대관령 양떼목장"
    }
  ];

  const nextImage = () => {
    let newIndex = (current === images.length - 1 ? 0 : current + 1);
    setCurrent(newIndex);
  };

  const prevImage = () => {
    let newIndex = (current === 0 ? images.length - 1 : current - 1);
    setCurrent(newIndex);
  };

  const jumpImage = (index) => {
    setCurrent(index);
  };

  useEffect(() => {
    const bubbles = document.getElementsByClassName("bubble-outer");
    for (let i = 0; i < bubbles.length; i++) {
      if (i === current) {
        bubbles[i].style.borderColor = "#8FAAD2";
      } else {
        bubbles[i].style.borderColor = "#000000";
      }
    }
  }, [current]);

return (
  <div>
    <div className="image-text-container">
        <img src='../../img/locationIcon.png' alt='locationIcon' />
      {images[current].location}
    </div>
    <div className="gallery-container">
      <span className="button-prev" onClick={prevImage}>
        chevron_left
      </span>
      <span className="button-next" onClick={nextImage}>
        chevron_right
      </span>
      <div className="gallery-track">
        {images.map((image, index) => (
          <div
            className={`slide-image ${index === current ? "active" : ""}`}
            style={{
              backgroundImage: `url(${image.url})`,
              transform: `translateX(${(index - current) * 100}%)`
            }}
            key={index}
          >
            <div className="image-overlay"></div>
          </div>
        ))}
      </div>
      <div className="gallery-footer">
        {images.map((image, index) => (
          <div
            className={`bubble-outer ${index === current ? "active" : ""}`}
            onClick={() => jumpImage(index)}
            id={index}
            key={index}
          >
            <div className="bubble-inner" id={index}></div>
          </div>
        ))}
      </div>
    </div>
   
  </div>
);
};

export default Carousel;
