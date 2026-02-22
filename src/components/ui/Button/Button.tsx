import type { PropsWithChildren } from "react";

import styled from "./Button.module.css";

interface ButtonProps {
  disabled?: boolean;
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  disabled,
  children,
}) => {
  return (
    <button disabled={disabled} className={styled.button}>
      {children}
    </button>
  );
};

export default Button;
