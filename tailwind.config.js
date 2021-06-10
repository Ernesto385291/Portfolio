module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url('/giphy.webp')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
