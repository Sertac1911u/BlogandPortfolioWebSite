module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
