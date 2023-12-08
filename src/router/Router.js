import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import ChatGpt from "../pages/GptPage";
import GptTest from "../pages/test/GptTest";
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
        path: "GptTest",

        element: <GptTest />,
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
    ],
  },
]);

export default router;
