import ThemeProvider from ".";
import { ThemeProviderProps } from ".";

export default {
  title: "ThemeProvider",
  component: ThemeProvider,
  argTypes: {
    primaryColor: { control: "color" },
  },
};

export const Basic = {
  args: {
    primaryColor: "blue",
  },
} as { args: ThemeProviderProps };
