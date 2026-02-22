import type { PropsWithChildren } from "react";

const ModalTitle: React.FC<PropsWithChildren> = ({ children }) => {
  return <h1 className="text-[26px] text-[#0B2B25] font-bold">{children}</h1>;
};

export default ModalTitle;
