import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import "./index.css";

import Root from "./Root";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import CreateUsers from "./pages/Users/Create/CreateUsers";
import NotFound from "./pages/NotFound/NotFound";

import { ModalProvider } from "./providers/ModalProvider";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, element: <Home /> },
      {
        path: "users",
        children: [
          { index: true, Component: Users },
          { path: "create", element: <CreateUsers isEditing={false} /> },
          { path: ":id/edit", element: <CreateUsers isEditing={true} /> },
        ],
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ModalProvider>
      <RouterProvider router={router} />
    </ModalProvider>
  </StrictMode>,
);
