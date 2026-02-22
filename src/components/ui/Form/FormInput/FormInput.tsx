import { type InputHTMLAttributes } from "react";

import styled from "./FormInput.module.css";

const borderStyle = (isFilled: boolean, error: string) => {
  if (error) {
    return "border-t-2 border-[#FF4B4A] border-solid";
  }

  if (isFilled) {
    return "border-t-2 border-[#0290A4] border-solid";
  }

  return "";
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
  const isFilled = currentValue.length > 0;

  return (
    <div className={styled.container}>
      <div className={styled.inputContainer}>
        {isFilled && (
          <label
            className={`${styled.label} ${errorMessage ? "text-[#ff4b4a]" : "text-[#0290a4]"}`}
          >
            {label}
          </label>
        )}

        <input className={styled.input} {...props} />
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
