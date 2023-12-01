import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import GptPage from "../pages/GptPage";
import GptTest from "../pages/test/GptTest";
import AppGptChat from "../pages/AppGptChat";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "GptPage",
        element: <GptPage />,
      },
      {
        path: "GptTest",
        element: <GptTest/>,
      },
      {
        path: "GptChat",
        element: <AppGptChat/>,
      }
    ],
  },
]);

export default router;
