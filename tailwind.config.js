module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    options: {
      safelist: ['dark'], //specific classes
    },
  },
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'simplex': ['simplex'],
      },
      boxShadow: {
        earth: '0px 0px 15px 3px rgba(102, 97, 241, 0.9)',
        sun: '0px 0px 15px 3px rgba(239, 63, 20, 0.9)',
        moon: '0px 0px 15px 3px rgba(149, 142, 140, 0.9)',
      },
    }

  },
  variants: {
    extend: {

    },
  },
  plugins: [],
}