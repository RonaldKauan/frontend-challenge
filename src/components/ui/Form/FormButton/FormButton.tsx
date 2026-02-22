import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

import styled from "./FormButton.module.css";

interface FormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  mode: "primary" | "secondary";
}

const FormButton: React.FC<PropsWithChildren<FormButtonProps>> = ({
  mode,
  children,
  ...props
}) => {
  const buttonStyle =
    mode === "primary" ? styled.primaryButton : styled.secondaryButton;

  return (
    <button className={`${styled.baseButton} ${buttonStyle}`} {...props}>
      {children}
    </button>
  );
};

export default FormButton;
