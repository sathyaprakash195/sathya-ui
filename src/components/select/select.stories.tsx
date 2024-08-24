import SelectField, { SelectFieldProps } from ".";

export default {
  title: "Select",
  component: SelectField,
  tags: ["autodocs"],
};

const options: { label: string; value: any }[] = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" },
];

export const Default = {
  args: {
    label: "Basic Select",
    options,
    value: "",
    onChange: (value: string) => console.log(value),
  } as SelectFieldProps,
};
