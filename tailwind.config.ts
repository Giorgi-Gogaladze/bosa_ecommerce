import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
      },
      colors: {
        footercol: '#f4f4f4',
        ftrbtmcol: '#eeeaea',
        headercol: '#333333',
        bigtext: '#EB5A3E',
        darkgray: '#565656',
        infogray:'#9e9e9e',
        newArrivals: '#302f2f',
        creamy: '#f5f4f7',
        background: "var(--background)",
        foreground: "var(--foreground)",
        hovercol: '#086abd'
      },
    },
  },
  plugins: [],
} satisfies Config;
