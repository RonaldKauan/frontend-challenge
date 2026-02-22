import { NavLink, useLocation } from "react-router";

import type { ISidebarItem } from "../../types/Sidebar";

interface SidebarItemProps {
  item: ISidebarItem;
  isSubItem?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ item, isSubItem }) => {
  const { activeIcon, name, normalIcon, path } = item;

  const location = useLocation();

  const isSelected =
    path === "/"
      ? location.pathname === path
      : location.pathname.includes(path);

  const currentIcon = isSelected ? activeIcon : normalIcon;

  return (
    <NavLink
      to={path}
      className={`flex items-center gap-2.5 ${isSubItem ? "px-3 py-1.5" : "p-4"} rounded-md ${isSelected ? "bg-[#00AAC1]" : "hover:bg-[#00606D]"}`}
    >
      {currentIcon}

      <p
        className={
          isSelected
            ? "text-[#021B1A] font-extrabold"
            : "text-white font-medium"
        }
      >
        {name}
      </p>
    </NavLink>
  );
};

export default SidebarItem;
