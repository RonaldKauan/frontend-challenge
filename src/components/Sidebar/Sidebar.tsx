import React, { useState } from "react";

import Logo from "../../assets/logo.svg";
import LogoMinimalist from "../../assets/logo-minimalist.svg";
import LeftArrow from "../../assets/left-arrow-icon.svg";

import HomeIcon from "../../assets/home-icon.svg";
import ActiveHomeIcon from "../../assets/active-home-icon.svg";
import AccessControlIcon from "../../assets/access-control-icon.svg";
import UsersIcon from "../../assets/users-icon.svg";
import ActiveUsersIcon from "../../assets/active-users-icon.svg";

import SidebarItem from "./SidebarItem";
import SidebarListItem from "./SidebarListItem";

import type { ISidebarItem } from "../../types/Sidebar";

const HOME_ITEM: ISidebarItem = {
  name: "Home",
  path: "/",
  activeIcon: <ActiveHomeIcon />,
  normalIcon: <HomeIcon />,
};

const USERS_ITEM: ISidebarItem = {
  name: "Usuários",
  path: "/users",
  activeIcon: <ActiveUsersIcon />,
  normalIcon: <UsersIcon />,
};

const ACCESS_CONTROL_SUBITEMS: ISidebarItem[] = [USERS_ITEM];

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  return (
    <nav
      className={`${isCollapsed ? "w-35" : "w-84"} transition-all duration-300 ease-in-out relative flex flex-col justify-between h-screen bg-[#0D1931] p-4`}
    >
      <div
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="bg-white h-9 w-9 rounded-[100%] shadow-[0px_3px_5px_#15223214] absolute -right-4 top-10 flex items-center justify-center hover:cursor-pointer"
      >
        <LeftArrow className={isCollapsed ? "rotate-180" : ""} />
      </div>

      <div className="flex flex-col">
        <div className="flex m-6 mb-11">
          {isCollapsed ? <LogoMinimalist /> : <Logo />}
        </div>

        <div
          className={`${isCollapsed ? "items-center gap-2.5" : "gap-1.5"} flex flex-col`}
        >
          <SidebarItem item={HOME_ITEM} isCollapsed={isCollapsed} />

          <SidebarListItem
            name="Controle de Acesso"
            icon={<AccessControlIcon />}
            subItems={ACCESS_CONTROL_SUBITEMS}
            isCollapsed={isCollapsed}
            openSidebar={() => setIsCollapsed(false)}
          />
        </div>
      </div>

      <div className="ml-5 justify-self-end">
        {isCollapsed === false && (
          <>
            <span className="text-white font-bold">© WenLock</span>
            <p className="text-xs text-[#AACBC4]">Power by Conecthus</p>
          </>
        )}

        <p className="text-xs text-[#AACBC4]">V 0.0.0</p>
      </div>
    </nav>
  );
};

export default Sidebar;
