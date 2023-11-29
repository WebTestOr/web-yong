import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import GptPage from "../pages/GptPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "GptPage",
        element: <GptPage />,
      },
    ],
  },
]);

export default router;
