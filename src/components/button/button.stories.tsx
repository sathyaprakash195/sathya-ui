import Button, { ButtonProps } from ".";

export default {
  component: Button,
  title: "Button",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    title: "Default Button",
    variant: "contained",
    onClick: () => console.log("Button clicked"),
  } as ButtonProps,
};
