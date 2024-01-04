/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "black-100": "#2B2C35",
        "primary-blue": {
          DEFAULT: "#2B59FF",
          100: "#F5F8FF",
        },
        "secondary-orange": "##E1862C",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
      },
      backgroundImage: {
        pattern: "url('/pattern.png')",
        "hero-bg": "url('/hero-bg.png')",
      },
    },
    // screens: {
    //   "maxsm": { "max": "640px" },
    //   "max-md": { "max": "980px" },
    //   "max-lg": { "max": "1100px" },
    //   "max-xl": { "max": "1366px" },
    //   "sm": { "min": "640px" },
    //   "md": { "min": "980px" },
    //   "lg": { "min": "1100px" },
    //   "xl": { "min": "1366px" },
    //   "2xl": { "min": "1640px" },
    // },
  },
  plugins: [],
};
