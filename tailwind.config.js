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
        homeBg: "url('/images/home-bg.png')",
        yellowBg: "url('/images/brown-paper-texture-background.png')",
        whiteLogo: "url('/images/white-logo.png')",
        aboutUs: "url('/images/about-us.png')",
        dog: "url('/images/dog.png')",
        carteringCard: "url('/images/catering-card.png')",
        halfDog: "url('/images/half-dog.png')",
      },
      colors: {
        nmr: {
          black: "#333333",
          red: "#C50800",
          redTxt: "#D9453F",
          lightBrown: "#F1E8DC",
        },
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out",
      },
    },
  },
  plugins: [],
};
