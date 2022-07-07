module.exports = {
  content: [
    "./pages/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "65-vh": "65vh",
        "73-vh": "73vh",
        "85-vh": "85vh"
      }
    },
  },
  plugins: [],
}
