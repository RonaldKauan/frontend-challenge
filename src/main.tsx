import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import "./index.css";

import Root from "./Root";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import CreateUsers from "./pages/Users/Create/CreateUsers";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "users",
        children: [
          { index: true, Component: Users },
          { path: "create", Component: CreateUsers },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
