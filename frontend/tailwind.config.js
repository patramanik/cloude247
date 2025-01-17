import plugin from "tailwindcss/plugin";
import forms from '@tailwindcss/forms';

export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#BFC4CD",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
          950: "#030712",
        },
        violet: {
          50: "#F1EEFF",
          100: "#E6E1FF",
          200: "#D2CBFF",
          300: "#B7ACFF",
          400: "#9C8CFF",
          500: "#8470FF",
          600: "#755FF8",
          700: "#5D47DE",
          800: "#4634B1",
          900: "#2F227C",
          950: "#1C1357",
        },
        sky: {
          50: "#E3F3FF",
          100: "#D1ECFF",
          200: "#B6E1FF",
          300: "#A0D7FF",
          400: "#7BC8FF",
          500: "#67BFFF",
          600: "#56B1F3",
          700: "#3193DA",
          800: "#1C71AE",
          900: "#124D79",
          950: "#0B324F",
        },
        green: {
          50: "#D2FFE2",
          100: "#B1FDCD",
          200: "#8BF0B0",
          300: "#67E294",
          400: "#4BD37D",
          500: "#3EC972",
          600: "#34BD68",
          700: "#239F52",
          800: "#15773A",
          900: "#0F5429",
          950: "#0A3F1E",
        },
        red: {
          50: "#FFE8E8",
          100: "#FFD1D1",
          200: "#FFB2B2",
          300: "#FF9494",
          400: "#FF7474",
          500: "#FF5656",
          600: "#FA4949",
          700: "#E63939",
          800: "#C52727",
          900: "#941818",
          950: "#600F0F",
        },
        yellow: {
          50: "#FFF2C9",
          100: "#FFE7A0",
          200: "#FFE081",
          300: "#FFD968",
          400: "#F7CD4C",
          500: "#F0BB33",
          600: "#DFAD2B",
          700: "#BC9021",
          800: "#816316",
          900: "#4F3D0E",
          950: "#342809",
        },
        ringA: "#f42f25",
        ringB: "#f49725",
        ringC: "#255ff4",
        ringD: "#f42582",
      },
      animation: {
        ringA: "ringA 2s linear infinite",
        ringB: "ringB 2s linear infinite",
        ringC: "ringC 2s linear infinite",
        ringD: "ringD 2s linear infinite",
      },
      keyframes: {
        ringA: {
          "0%, 4%": {
            strokeDasharray: "0 660",
            strokeWidth: "20",
            strokeDashoffset: "-330",
          },
          "12%": {
            strokeDasharray: "60 600",
            strokeWidth: "30",
            strokeDashoffset: "-335",
          },
          "32%": {
            strokeDasharray: "60 600",
            strokeWidth: "30",
            strokeDashoffset: "-595",
          },
          "40%, 54%": {
            strokeDasharray: "0 660",
            strokeWidth: "20",
            strokeDashoffset: "-660",
          },
          "62%": {
            strokeDasharray: "60 600",
            strokeWidth: "30",
            strokeDashoffset: "-665",
          },
          "82%": {
            strokeDasharray: "60 600",
            strokeWidth: "30",
            strokeDashoffset: "-925",
          },
          "90%, 100%": {
            strokeDasharray: "0 660",
            strokeWidth: "20",
            strokeDashoffset: "-990",
          },
        },
        ringB: {
          "0%, 12%": {
            strokeDasharray: "0 220",
            strokeWidth: "20",
            strokeDashoffset: "-110",
          },
          "20%": {
            strokeDasharray: "20 200",
            strokeWidth: "30",
            strokeDashoffset: "-115",
          },
          "40%": {
            strokeDasharray: "20 200",
            strokeWidth: "30",
            strokeDashoffset: "-195",
          },
          "48%, 62%": {
            strokeDasharray: "0 220",
            strokeWidth: "20",
            strokeDashoffset: "-220",
          },
          "70%": {
            strokeDasharray: "20 200",
            strokeWidth: "30",
            strokeDashoffset: "-225",
          },
          "90%": {
            strokeDasharray: "20 200",
            strokeWidth: "30",
            strokeDashoffset: "-305",
          },
          "98%, 100%": {
            strokeDasharray: "0 220",
            strokeWidth: "20",
            strokeDashoffset: "-330",
          },
        },
        ringC: {
          "0%": {
            strokeDasharray: "0 440",
            strokeWidth: "20",
            strokeDashoffset: "0",
          },
          "8%": {
            strokeDasharray: "40 400",
            strokeWidth: "30",
            strokeDashoffset: "-5",
          },
          "28%": {
            strokeDasharray: "40 400",
            strokeWidth: "30",
            strokeDashoffset: "-175",
          },
          "36%, 58%": {
            strokeDasharray: "0 440",
            strokeWidth: "20",
            strokeDashoffset: "-220",
          },
          "66%": {
            strokeDasharray: "40 400",
            strokeWidth: "30",
            strokeDashoffset: "-225",
          },
          "86%": {
            strokeDasharray: "40 400",
            strokeWidth: "30",
            strokeDashoffset: "-395",
          },
          "94%, 100%": {
            strokeDasharray: "0 440",
            strokeWidth: "20",
            strokeDashoffset: "-440",
          },
        },
        ringD: {
          "0%, 8%": {
            strokeDasharray: "0 440",
            strokeWidth: "20",
            strokeDashoffset: "0",
          },
          "16%": {
            strokeDasharray: "40 400",
            strokeWidth: "30",
            strokeDashoffset: "-5",
          },
          "36%": {
            strokeDasharray: "40 400",
            strokeWidth: "30",
            strokeDashoffset: "-175",
          },
          "44%, 50%": {
            strokeDasharray: "0 440",
            strokeWidth: "20",
            strokeDashoffset: "-220",
          },
          "58%": {
            strokeDasharray: "40 400",
            strokeWidth: "30",
            strokeDashoffset: "-225",
          },
          "78%": {
            strokeDasharray: "40 400",
            strokeWidth: "30",
            strokeDashoffset: "-395",
          },
          "86%, 100%": {
            strokeDasharray: "0 440",
            strokeWidth: "20",
            strokeDashoffset: "-440",
          },
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.5" }],
        sm: ["0.875rem", { lineHeight: "1.5715" }],
        base: ["1rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        lg: ["1.125rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        xl: ["1.25rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        "2xl": ["1.5rem", { lineHeight: "1.33", letterSpacing: "-0.01em" }],
        "3xl": ["1.88rem", { lineHeight: "1.33", letterSpacing: "-0.01em" }],
        "4xl": ["2.25rem", { lineHeight: "1.25", letterSpacing: "-0.02em" }],
        "5xl": ["3rem", { lineHeight: "1.25", letterSpacing: "-0.02em" }],
        "6xl": ["3.75rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
      },
    },
  },
  plugins: [
    forms,
    // add custom variant for expanding sidebar
    plugin(({ addVariant, e }) => {
      addVariant('sidebar-expanded', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => `.sidebar-expanded .${e(`sidebar-expanded${separator}${className}`)}`);
      });
    }),
  ],
};








// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

