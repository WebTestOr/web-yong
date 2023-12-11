// 라우터 관리
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import ChatGpt from "../pages/GptPage";
import AppGptChat from "../pages/AppGptChat";
import Review from "../pages/Review";
import ReviewList from "../pages/ReviewList";
import MyList from "../pages/Mylist";
import TravelPlaceInfo from "../pages/Search/Search";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "ChatGpt",
        element: <ChatGpt />,
      },
      {
        path: "GptChat",
        element: <AppGptChat />,
      },
      {
        path: "Review",
        element: <Review />,
      },
      {
        path: "Reviewlist",
        element: <ReviewList />,
      },
      {
        path: "TravelInfo",
        element: <TravelPlaceInfo />,
      },
      {
        path: "services",
        element: <MyList />,
      },
      {
        path: "search",
        element: <TravelPlaceInfo/>
      },
    ],
  },
]);

export default router;
