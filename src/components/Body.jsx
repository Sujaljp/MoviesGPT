import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "../pages/Auth/Auth";
import Browse from "../pages/Browse/Browse";
import GptSearch from "../pages/GptSearch/GptSearch";

const Body = () => {
  const appRouter = createBrowserRouter([
    { path: "/auth", element: <Auth /> },
    { path: "/", element: <Browse /> },
    { path: "/search", element: <GptSearch /> },
  ]);
  return <RouterProvider router={appRouter} />;
};

export default Body;
