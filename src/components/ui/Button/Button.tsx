import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

import styled from "./Button.module.css";

const Button: React.FC<
  PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
> = ({ children, ...props }) => {
  return (
    <button className={styled.button} {...props}>
      {children}
    </button>
  );
};

export default Button;
