module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["mulish", "sans-serif"],
      mono: ["rokkitt", "mono"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
