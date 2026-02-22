import React from "react";

import "./Sidebar.module.css";

import Logo from "../../assets/logo.svg";

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
  return (
    <nav className="flex flex-col justify-between w-84 h-screen bg-[#0D1931] p-4">
      <div className="flex flex-col">
        <div className="flex m-6 mb-11">
          <Logo />
        </div>

        <div className="flex flex-col gap-1.5">
          <SidebarItem item={HOME_ITEM} />

          <SidebarListItem
            name="Controle de Acesso"
            icon={<AccessControlIcon />}
            subItems={ACCESS_CONTROL_SUBITEMS}
          />
        </div>
      </div>

      <div className="ml-5 justify-self-end">
        <span className="text-white font-bold">© WenLock</span>
        <p className="text-xs text-[#AACBC4]">Power by Conecthus</p>
        <p className="text-xs text-[#AACBC4]">V 0.0.0</p>
      </div>
    </nav>
  );
};

export default Sidebar;
