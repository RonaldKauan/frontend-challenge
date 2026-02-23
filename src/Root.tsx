import React from "react";

import ModalComponent from "./components/ui/Modal/ModalComponent";

import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";

import { Outlet } from "react-router";

const Root: React.FC = () => {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Header />

        <div className="bg-[#F3F3F3] px-11 py-5 overflow-auto flex-1">
          <Outlet />
        </div>
      </div>

      <ModalComponent />
    </div>
  );
};

export default Root;
