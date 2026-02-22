import { useState, type InputHTMLAttributes } from "react";

import styled from "./FormInput.module.css";

import ViewPassIcon from "../../../../assets/view-pass-icon.svg";
import HidePassIcon from "../../../../assets/hide-pass-icon.svg";

const borderStyle = (isFilled: boolean, error: string) => {
  if (error) {
    return "border-t-2 border-[#FF4B4A] border-solid";
  }

  if (isFilled) {
    return "border-t-2 border-[#0290A4] border-solid";
  }

  return "";
};

const getInputType = (
  type: React.HTMLInputTypeAttribute = "text",
  showPassword: boolean,
): React.HTMLInputTypeAttribute => {
  if (type !== "password") {
    return type;
  }

  if (showPassword) {
    return "text";
  }

  return "password";
};

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helperText?: string;
  errorMessage: string;
  currentValue: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  helperText,
  errorMessage,
  currentValue = "",
  ...props
}) => {
  const { type } = props;

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const isFilled = currentValue.length > 0;

  const inputType = getInputType(type, showPassword);

  const togglePassword = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();

    setShowPassword(!showPassword);
  };

  return (
    <div className={styled.container}>
      <div className={styled.inputContainer}>
        <div className="flex flex-col justify-center w-full">
          {isFilled && (
            <label
              className={`${styled.label} ${errorMessage ? "text-[#ff4b4a]" : "text-[#0290a4]"}`}
            >
              {label}
            </label>
          )}

          <input {...props} className={styled.input} type={inputType} />
        </div>

        {type === "password" && (
          <button onClick={(e) => togglePassword(e)}>
            {showPassword ? <HidePassIcon /> : <ViewPassIcon />}
          </button>
        )}
      </div>

      <div
        className={`${styled.helperContainer} ${borderStyle(isFilled, errorMessage)}`}
      >
        <small className={styled.errorMessage}>{errorMessage}</small>

        {helperText && (
          <small className={styled.helperText}>• {helperText}</small>
        )}
      </div>
    </div>
  );
};

export default FormInput;
