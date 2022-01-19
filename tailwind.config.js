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
        footer: "url('/images/footer.png')",
        redBg: "url('/images/red-bg.png')",
        yellowBg: "url('/images/brown-paper-texture-background.png')",
        whiteLogo: "url('/images/white-logo.png')",
        aboutUs: "url('/images/about-us.png')",
        dog: "url('/images/dog.png')",
        carteringCard: "url('/images/catering-card.png')",
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
