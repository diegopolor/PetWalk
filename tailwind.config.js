/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontSize: [
      {
        base: ['14px', '20px'],
        small: ['12px', '20px'],
        title: ['16px', '20px']
      }
    ],
    minWidth: {
      minCard: '193px',
      minProfile: '205px',
      minProfileDscp: '665px',
      minComment: '299px'
    },
    minHeight: {
      minCard: '50%',
    },
    maxWidth: {
      maxProfile: '205px',
      maxComment: '299px'
    },
    maxHeight: {
      maxPhotoCmmt: '50px'
    },
    extend: {
      colors: {
        primary : '#519775',
        secundary: '#F39E6A',
        bgScreen: '#E9E9E9',
        bgGeneric: '#D9D9D9',
        bgPrimary: '#F1F1F1',
        bgSecundary: '#535353',
        bgWhite: '#FCFCFC'
      },
      borderRadius: {
        button: '30px',
        full: '100px'
      },

    },
  },
  plugins: [],
}

