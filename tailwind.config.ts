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
        // Arctic Theme Colors
        aurora: {
          green: '#00D9A3',
          cyan: '#00B8D4',
          purple: '#9575CD',
        },
        arctic: {
          night: '#0A1929',
          deep: '#132F4C',
          frost: '#1E4976',
        },
        text: {
          secondary: '#B0BEC5',
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
