import classNames from "classnames";
import React from "react";
import ThemeProvider from "../theme-provider";
function InputField({
  value,
  onChange,
  placeholder,
  type = "text",
  disabled,
  error,
  name,
  size = "medium",
  border = "rounded",
}: InputFieldProps) {
  return (
    <ThemeProvider>
      <div>
        <label>{name}</label>
        <input
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          disabled={disabled}
          name={name}
          className={classNames("text-sm border border-primary px-5", {
            "rounded-sm": border === "rounded",
            "border-red-500": error,
            "text-xs h-8": size === "small",
            "text-sm h-10": size === "medium",
            "text-lg h-12": size === "large",
          })}
        />
      </div>
    </ThemeProvider>
  );
}

export default InputField;

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: "text" | "password" | "number";
  disabled?: boolean;
  error?: boolean;
  name?: string;
  size?: "small" | "medium" | "large";
  border?: "rounded" | "none";
}
