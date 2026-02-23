import { useState, type PropsWithChildren } from "react";

import { ModalContext, type ModalSettings } from "../contexts/ModalContext";

export const ModalProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [settings, setSettings] = useState<ModalSettings>({} as ModalSettings);

  const openModal = (settings: ModalSettings) => {
    setSettings(settings);

    setIsOpen(true);
  };
  const closeModal = () => {
    setSettings({} as ModalSettings);

    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isOpen, settings, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
