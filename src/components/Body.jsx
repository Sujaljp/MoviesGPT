import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "../pages/Auth/Auth";
import Browse from "../pages/Browse/Browse";

const Body = () => {
  

  const appRouter = createBrowserRouter([
    { path: "/", element: <Auth /> },
    { path: "/browse", element: <Browse /> },
  ]);
  return <RouterProvider router={appRouter} />;
};

export default Body;
