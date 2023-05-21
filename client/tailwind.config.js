import formPlugin from "@tailwindcss/forms";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGreen: "#314D3E",
        uiGray: "#F7F7F7",
        uitextColor: "#808080",
        tableHeadersTextColor: "#4C4C4C",
        verifiedBg: "#DEEDE5",
        verifiedText: "#427A5B",
        pendingBg: "#FDF8CE",
        pendingText: "#938406",
        unverifiedText: "#999999",
        pgNumberBg: "#E6E6E6",
        filterTextColor: "#4C4C4C",
      },
      backgroundImage: {
        colorful: "url('/assets/background.png')",
      },
    },
  },
  plugins: [formPlugin],
};
