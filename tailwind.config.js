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
    400: "#E57373",
    500: "#F44336",
    600: "#D32F2F",
  },
  spBlack: "#232323",

  gray: {
    100: "#F9F8F9",
    200: "#E0DFE1",
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
  gray_600: "#D5D5D5",
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ...colors,
    },
    extend: {},
  },
  plugins: [],
};
