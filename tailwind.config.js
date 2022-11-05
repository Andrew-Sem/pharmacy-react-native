/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "task-gray": "#505050",
      "light-green": "#90EE90",
    },
    borderColor: {
      gray: "#505050",
    },
    borderRadius: {
      lg: "24px",
    },
    extend: {},
  },
  plugins: [],
};
