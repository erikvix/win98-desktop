/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      win: ["MSSANSSERIF"],
    },

    extend: {
      backgroundImage: (theme) => ({
        "custom-water":
          "url('https://textures.neocities.org/textures/water/SD175.JPG')",
      }),
    },
  },
  plugins: [],
};
