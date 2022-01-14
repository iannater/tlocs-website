module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nmr: ['"Shrikhand"', "cursive"],
      },
      backgroundImage: {
        footer: "url('../assets/footer.png')",
        redBg: "url('../assets/red-bg.png')",
        yellowBg: "url('../assets/brown-paper-texture-background.png')",
        whiteLogo: "url('../assets/white-logo.png')",
      },
      colors: {
        nmr: {
          black: "#333333",
          red: "#C50800",
          redTxt: "#D9453F",
          lightBrown: "#F1E8DC",
        },
      },
    },
  },
  plugins: [],
};
