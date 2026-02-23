import { useState, type ReactElement } from "react";

import { useLocation } from "react-router";

import ArrowUpIcon from "../../assets/arrow-up-icon.svg";
import ArrowDownIcon from "../../assets/arrow-down-icon.svg";

import SidebarItem from "./SidebarItem";

import type { ISidebarItem } from "../../types/Sidebar";

interface SidebarListItemProps {
  name: string;
  icon: ReactElement;
  subItems: ISidebarItem[];
  isCollapsed: boolean;
  openSidebar: () => void;
}

const checkActiveSubItems = (
  subItems: ISidebarItem[],
  path: string,
): boolean => {
  return subItems.some((subItem) => path.includes(subItem.path));
};

const SidebarListItem: React.FC<SidebarListItemProps> = ({
  name,
  icon,
  subItems,
  isCollapsed,
  openSidebar,
}) => {
  const location = useLocation();

  const [isExpanded, setIsExpanded] = useState<boolean>(
    checkActiveSubItems(subItems, location.pathname),
  );

  const arrowIcon = isExpanded === true ? <ArrowDownIcon /> : <ArrowUpIcon />;

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return isCollapsed === true ? (
    <div
      className="flex p-4 cursor-pointer hover:bg-[#00606D] rounded-md"
      onClick={() => openSidebar()}
    >
      {icon}
    </div>
  ) : (
    <div className="flex flex-col gap-1.5">
      <div
        className="flex p-4 justify-between hover:bg-[#00606D] rounded-md"
        onClick={() => handleExpand()}
      >
        <div className="flex gap-2.5">
          {icon}
          <p className="text-white font-medium">{name}</p>
        </div>

        {arrowIcon}
      </div>

      {isExpanded && (
        <div className="flex flex-col ml-10">
          {subItems.map((subItem, index) => (
            <SidebarItem item={subItem} isSubItem key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarListItem;
