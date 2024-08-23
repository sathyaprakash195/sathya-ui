module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // Toggle dark-mode based on .dark class or data-mode="dark"
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
