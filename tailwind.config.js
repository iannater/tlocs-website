module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        footer: "url('../assets/footer.png')",
        redBg: "url('../assets/red-bg.png')",
        yellowBg: "url('../assets/brown-paper-texture-background.png')",
      },
      colors: {
        nmr: {
          black: "#333333",
          red: "#C50800",
        },
      },
    },
  },
  plugins: [],
};
