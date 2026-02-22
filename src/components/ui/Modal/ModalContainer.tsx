import type { PropsWithChildren } from "react";

interface ModalContainerProps {
  isOpen: boolean;
}

const ModalContainer: React.FC<PropsWithChildren<ModalContainerProps>> = ({
  isOpen,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-white backdrop-blur-[2px]">
      {children}
    </div>
  );
};

export default ModalContainer;
