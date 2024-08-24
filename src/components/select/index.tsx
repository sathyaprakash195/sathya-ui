import { useState } from "react";
import ThemeProvider from "../theme-provider";
import classNames from "classnames";

function SelectField({
  label,
  options,
  value,
  onChange,
  disabled,
}: SelectFieldProps) {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  return (
    <ThemeProvider>
      <div className="flex flex-col gap-1">
        <label className="text-sm">{label}</label>
        <div
          className={classNames(
            "p-2 border border-primary rounded-sm text-sm cursor-pointer border-solid",
            {
              "pointer-events-none cursor-disabled bg-gray-100": disabled,
            }
          )}
          onClick={() => setShowOptions(!showOptions)}
        >
          {selectedValue || "Select an option"}
        </div>
        {showOptions && (
          <div className="flex flex-col gap-2 p-2 border border-gray-200 rounded-sm border-solid">
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => {
                  setSelectedValue(option.label);
                  onChange(option.value);
                  setShowOptions(false);
                }}
                className="cursor-pointer p-2 text-sm hover:bg-gray-100 rounded-sm"
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default SelectField;

export interface SelectFieldProps {
  label: string;
  options: { label: string; value: any }[];
  value: any;
  onChange: (value: string) => void;
  disabled?: boolean;
}
