/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        // Add custom breakpoints while keeping defaults
        "2xl": "1536px", // Already exists in Tailwind
        "3xl": "1920px", // Full HD
        "4xl": "2560px", // 2K/QHD
        "5xl": "3840px", // 4K/UHD
      },
    },
  },
  plugins: [],
};
