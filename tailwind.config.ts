import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          bright: '#1200D9',  // Bright blue
          DEFAULT: '#0C008A', // Medium blue
          dark: '#09006C',    // Dark blue
        },
        dark: '#1D1E18',      // Almost black
        light: '#FAFAFF',     // Off-white
        'gray-custom': '#D5D3D1', // Light gray
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        poppins: ['var(--font-heading)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
