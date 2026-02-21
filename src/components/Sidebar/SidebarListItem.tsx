import { useState } from "react";

import ArrowUpIcon from "../../assets/arrow-up-icon.svg";
import ArrowDownIcon from "../../assets/arrow-down-icon.svg";

import SidebarItem from "./SidebarItem";

import type { ISidebarItem } from "../../types/Sidebar";

interface SidebarListItemProps {
  name: string;
  icon: string;
  subItems: ISidebarItem[];
}

const SidebarListItem: React.FC<SidebarListItemProps> = ({
  name,
  icon,
  subItems,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const arrowIcon = isExpanded === true ? ArrowDownIcon : ArrowUpIcon;

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col gap-1.5">
      <div
        className="flex p-4 justify-between hover:bg-[#00606D] rounded-md"
        onClick={() => handleExpand()}
      >
        <div className="flex gap-2.5">
          <img src={icon} />
          <p className="text-white font-medium">{name}</p>
        </div>

        <img src={arrowIcon}></img>
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
