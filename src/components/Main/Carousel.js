import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselComponent() {
  const images = [
    { url: "https://a.cdn-hotels.com/gdcs/production20/d355/79e1a288-fc93-4891-a037-43dc13453899.jpg?impolicy=fcrop&w=1600&h=1066&q=medium" },
    { url: "https://post-phinf.pstatic.net/MjAxODExMjJfMjE3/MDAxNTQyODY3MTY5ODY2.JLUg3UiKTBjdKc-3TOCpdu7NjqQ65zWTyvgyySWi6nog.2q2tH5FbZpNqqesqYv1o1MMXaaQ4RXJYJ5fcs6A7mQsg.JPEG/%ED%95%98%EC%9D%B4%EC%9B%90.jpg?type=w1200" },
    { url: "https://lh3.googleusercontent.com/p/AF1QipP65tsdPGmd-t4edkw-hVsjGXmLY7lYybWMHK9g=s680-w680-h510" }
  ];

  const carouselImageStyle = {

    width: "1000px",
    height: "400px"
  };

  const renderArrowPrev = (onClickHandler, hasPrev, label) => (
    <button onClick={onClickHandler} disabled={!hasPrev}>
     <img src="./img/prev.png" alt="prev" />
    </button>
  );

  const renderArrowNext = (onClickHandler, hasNext, label) => (
    <button onClick={onClickHandler} disabled={!hasNext}>
        <img src="./img/next.png" alt="next" />
    </button>
  );
  
  return (
    <div>
      <Carousel
        renderArrowPrev={renderArrowPrev}
        renderArrowNext={renderArrowNext}
        showIndicators={false}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image.url}
              alt={`이미지 ${index + 1}`}
              style={carouselImageStyle}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
