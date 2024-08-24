import classNames from "classnames";
import ThemeProvider from "../theme-provider";

function Button({ title, onClick, variant, size = "medium" }: ButtonProps) {
  return (
    <ThemeProvider>
      <button
        onClick={onClick}
        className={classNames("px-5 p-2 cursor-pointer", {
          "bg-primary text-white border-none": variant === "contained",
          "bg-white text-primary border border-primary": variant === "outlined",
          "text-xs h-8": size === "small",
          "text-sm h-10": size === "medium",
          "text-lg h-12": size === "large",
        })}
      >
        {title}
      </button>
    </ThemeProvider>
  );
}

export default Button;

export interface ButtonProps {
  title: string;
  onClick: () => void;
  variant: "contained" | "outlined";
  size?: "small" | "medium" | "large";
}
