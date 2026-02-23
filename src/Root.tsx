import React from "react";

import Sidebar from "./components/Sidebar/Sidebar";
import ModalComponent from "./components/ui/Modal/ModalComponent";

import { Outlet } from "react-router";

const Root: React.FC = () => {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar />

      <div className="bg-[#F3F3F3] w-full px-11 py-5 overflow-auto">
        <Outlet />
      </div>

      <ModalComponent />
    </div>
  );
};

export default Root;
