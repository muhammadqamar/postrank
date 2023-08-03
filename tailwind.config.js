/** @type {import('tailwindcss').Config} */

const colors = {
  primary: {
    100: "#EEE6FF",
    200: "#DCCAFF",
    300: "#C9ADFF",
    400: "#A679FF",
    500: "#9864FF",
    600: "#8A4FFF",
    700: "#7232FA",
    800: "#4A1FA5",
    900: "#170A33",
  },
  success: {
    400: "#81C784",
    500: "#4CAF50",
    600: "#388E3C",
  },
  black: "#000",
  white: "#fff",
  error: {
    300: "#AB3B2A",
    400: "#E57373",
    500: "#F44336",
    600: "#D32F2F",
  },
  spBlack: "#232323",

  gray: {
    100: "#F9F8F9",
    200: "#D5D5D5",
    300: "#AFAEB2",
    400: "#7F7D83",
    500: "#4E4D51",
    600: "#3A393C",
    700: "#464646",
    800: "#1F1E20",
    900: "#000000",
  },
  blue: {
    100: "#E0E9FA",
    200: "#f1f6fd",
    300: "#BDCFF4",
    500: "#2F67DD",
    700: "#274C9B",
    800: "#0f56B3",
  },
  teal: {
    500: "#3ab6A7",
    700: "#0c8577",
    "accent-500": "#24b3b5",
    "accent-700": "#3ec9cb",
  },
  cardBorder: "#cccccc",
  categoryBadge: {
    // based on category slugs
    "html-css": "#f0c79c", // original: #ef8d24
    javascript: "#ffe7d1", // original: #f6b33c
    "design-ux": "#d1ffe4", // original: #3cbc8d
    entrepreneur: "#b5eaf5", // original: #3dbfd9
    web: "#aad4e6", // original: #1c94c6
    php: "#cbcbf7", // original: #666699
    wordpress: "#b6e8fa", // original: #248aaf
    mobile: "#99d6ff", // original: #2c5773
    computing: "#9fb9ed", // original: #334466
  },
  white_200: "#F1F1F1",
  white_300: "#E8E8E8",
  purple_300: "#8B54FF",

  gray_300: "#ABABAB",
  gray_400: "#464646",
  gray_500: "#E6E6E6",
  gray_600: "#6C6C6C",
};

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
    },

    boxShadow: {
      lgShadow:
        "0px 3.154672384262085px 10.321866989135742px 0px rgba(0, 0, 0, 0.06), 0px 7.581116199493408px 24.804880142211914px 0px rgba(0, 0, 0, 0.09), 0px 14.274569511413574px 46.705387115478516px 0px rgba(0, 0, 0, 0.12), 0px 25.46339225769043px 83.3144302368164px 0px rgba(0, 0, 0, 0.14), 0px 47.6264762878418px 155.8304901123047px 0px rgba(0, 0, 0, 0.17), 0px 114px 373px 0px rgba(0, 0, 0, 0.23)",

      mdShadow:
        "0px 3.5060346126556396px 4.507758617401123px 0px rgba(0, 0, 0, 0.04), 0px 28px 36px 0px rgba(0, 0, 0, 0.07)",
    },

    screens: {
      xsm: "320px",
      sm: "640px",
      // @media (min-width: 640px) { ... }
      md: "768px",
      // @media (min-width: 768px) { ... }
      lg: "1024px",
      // @media (min-width: 1024px) { ... }
      xl: "	1280px",
      // @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // @media (min-width: 1536px) { ... }f
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
