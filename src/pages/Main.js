// 메인 페이지
import React from "react";
import Header from "../components/Header/Header";
import CarouselComponent from "../../src/components/Carousel/Carousel";
import Box from "../../src/components/MainBox/Box";
function Main() {
  return ( 
    <>
      <Header/>
      <div style={{width:"1280px", height:"calc(100% - 176px)",overflowY:"auto", margin:"0 auto"}}>
        <CarouselComponent />
        <Box />
      </div>
    </>
  );
}

export default Main;
