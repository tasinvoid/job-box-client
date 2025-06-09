import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home/Home";
import RootLayout from "../layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
    ],
  },
]);

export default router;
