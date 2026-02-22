import type { PropsWithChildren } from "react";

const ModalContent: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-[30vw] h-[30vh] flex flex-col justify-between items-center py-8 bg-white shadow-[0px_1px_4px_#00000029] rounded-md">
      {children}
    </div>
  );
};

export default ModalContent;
