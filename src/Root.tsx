import React from "react";

import Sidebar from "./components/Sidebar/Sidebar";

import { Outlet } from "react-router";

const Root: React.FC = () => {
  return (
    <div className="h-screen flex">
      <Sidebar />

      <Outlet />
    </div>
  );
};

export default Root;
