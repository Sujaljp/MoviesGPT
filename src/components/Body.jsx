import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "../pages/Auth/Auth";
import Browse from "../pages/Browse/Browse";
import GptSearch from "../pages/GptSearch/GptSearch";
import ErrorComponent from "./ErrorComponent";
import WatchPage from "../pages/Watch/WatchPage";

const Body = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Browse />, errorElement: <ErrorComponent /> },
    { path: "/auth", element: <Auth /> },
    { path: "/search", element: <GptSearch /> },
    { path: "/watch", element: <WatchPage /> },
  ]);
  return <RouterProvider router={appRouter} />;
};

export default Body;
