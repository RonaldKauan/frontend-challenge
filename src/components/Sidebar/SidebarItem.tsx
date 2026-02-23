import { NavLink, useLocation } from "react-router";

import type { ISidebarItem } from "../../types/Sidebar";

interface SidebarItemProps {
  item: ISidebarItem;
  isCollapsed?: boolean;
  isSubItem?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  item,
  isCollapsed,
  isSubItem,
}) => {
  const { activeIcon, name, normalIcon, path } = item;

  const location = useLocation();

  const isSelected =
    path === "/"
      ? location.pathname === path
      : location.pathname.includes(path);

  const currentIcon = isSelected ? activeIcon : normalIcon;

  return isCollapsed ? (
    <NavLink
      to={path}
      className={`flex items-center justify-center rounded-md w-15 h-13.5 ${isSelected ? "bg-[#00AAC1]" : "hover:bg-[#00606D]"}`}
    >
      {currentIcon}
    </NavLink>
  ) : (
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
