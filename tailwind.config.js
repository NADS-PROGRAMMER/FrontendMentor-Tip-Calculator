module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        spaceMono: ['Kumbh Sans', 'sans-serif']
      },
      colors: {
        tipStrongCyan: 'hsl(172, 67%, 45%)',
        tipVeryDarkCyan: 'hsl(183, 100%, 15%)',
        tipDarkGrayishCyan: 'hsl(186, 14%, 43%)',
        tipDarkGrayishCyan2: 'hsl(184, 14%, 56%)',
        tipLightGrayishCyan: 'hsl(185, 41%, 84%)',
        tipLightGrayishCyan2: 'hsl(189, 41%, 97%)',
        tipWhite: 'hsl(0, 0%, 100%)'
      }
    },
  },
  plugins: [],
}
