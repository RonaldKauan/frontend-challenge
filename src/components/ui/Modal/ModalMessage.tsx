import type { PropsWithChildren } from "react";

const ModalMessage: React.FC<PropsWithChildren> = ({ children }) => {
  return <p className="text-[18px] text-[#0B2B25] font-medium">{children}</p>;
};

export default ModalMessage;
