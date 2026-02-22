import type { PropsWithChildren } from "react";

const ModalFooter: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex justify-center gap-2">{children}</div>;
};

export default ModalFooter;
