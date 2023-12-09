import React from "react";
import Header from "../components/Header/Header";
import CarouselComponent from "../../src/components/Main/Carousel";

function Main() {
  return ( 
    <>
      <Header/>
      <div>
        <CarouselComponent />
      </div>
    </>
  );
}

export default Main;
