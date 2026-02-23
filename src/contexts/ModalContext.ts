import { createContext } from "react";

export interface ModalSettings {
  title: string;
  message: string;
  primaryButtonAction: () => void;
  secondaryButtonAction: () => void;
  primaryButtonText: string;
  secondaryButtonText: string;
}

interface ModalContextProps {
  isOpen: boolean;
  settings: ModalSettings;
  openModal: (settings: ModalSettings) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextProps>(
  {} as ModalContextProps,
);
