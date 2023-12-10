import React from "react";
import Header from "../components/Header/Header";
import CarouselComponent from "../../src/components/Carousel/Carousel";
import Box from "../../src/components/MainBox/Box";
function Main() {
  return ( 
    <>
      <Header/>
      <div>
        <CarouselComponent />
        <Box />
      </div>
    </>
  );
}

export default Main;
