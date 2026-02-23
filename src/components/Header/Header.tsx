import { useEffect, useState } from "react";

import ArrowUpMenuIcon from "../../assets/arrow-up-menu-icon.svg";
import LogoutIcon from "../../assets/logout-icon.svg";

const MenuItem = () => {
  return (
    <div className="flex flex-col gap-5 absolute -bottom-33 right-0 w-72 rounded-md bg-white p-4 shadow-[0px_3px_5px_#15223214]">
      <div className="bg-white rotate-45 absolute z-2 right-4 -top-2 h-4 w-4" />

      <div className="flex gap-1.5">
        <div className="self-center flex items-center justify-center bg-[#0B2B25] h-10 w-10 rounded-[100%]">
          <span className="text-white select-none">MS</span>
        </div>

        <div className="flex flex-col">
          <h3 className="text-[1rem] text-[#0290A4] font-bold">
            Milena Santana Borges
          </h3>
          <p className="text-[#0B2B25] text-[14px] font-normal">
            milena.santana@energy.org.br
          </p>
        </div>
      </div>

      <div className="flex gap-1.5">
        <LogoutIcon />
        <span className="text-[#0B2B25] font-medium">Sair</span>
      </div>
    </div>
  );
};

const MenuIcon = () => {
  const [showMenuItem, setShowMenuItem] = useState<boolean>(false);

  const hideMenuItem = () => {
    setShowMenuItem(false);
  };

  useEffect(() => {
    document.addEventListener("click", hideMenuItem);

    return () => {
      document.removeEventListener("click", hideMenuItem);
    };
  });

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setShowMenuItem(!showMenuItem);
      }}
      className="flex items-center justify-center relative rounded-[100%] bg-[#0B2B25] h-14 w-14 border-3 border-solid border-[#17876D] cursor-pointer"
    >
      <span className="text-white text-xl select-none">MS</span>

      <div className="absolute -bottom-1 -right-3">
        <ArrowUpMenuIcon className="rotate-180" />
      </div>

      {showMenuItem && <MenuItem />}
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex justify-end items-center h-20 w-full bg-white shadow-[0px_3px_5px_#15223214] px-16">
      <MenuIcon />
    </div>
  );
};

export default Header;
