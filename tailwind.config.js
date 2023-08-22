/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero_image: "url('./images/Benigmara01.jpg')",
        hero_two: "url('./images/Benigmara02.jpg')",
        hero_three: "url('./images/Benigmara03.jpg')",
      },
    },
    plugins: [],
  },
};
