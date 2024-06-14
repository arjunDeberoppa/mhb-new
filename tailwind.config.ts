import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "custom-black": "#3C3D41",
        "custom-green": "#00A96F",
        "custom-light-green": "#00F4A1",
        "custom-light": "#F4F4F4",
        "custom-purple": "#605EA8",
        "custom-gray": "#E5E5E5",
      },
      container: {
        padding: {
          DEFAULT: "20px",
          sm: "20px",
          md: "64px",
          lg: "64px",
          xl: "64px",
          "2xl": "64px",
        },
      },
      boxShadow: {
        "3xl": "0px 0px 30px 0px rgba(96, 94, 168, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
