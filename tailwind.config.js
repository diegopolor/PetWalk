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
      generic: '205px',
      minProfileDscp: '665px',
      asideRight: '299px',
      minHourly: '140px'
    },
    minHeight: {
      minCard: '50%',
      'layout-offer': '501px'
    },
    maxWidth: {
      generic: '205px',
      asideRight: '299px'
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
      width: {
        imgOffer: '133px',
        yoursOffers: '435px',
        formOffers: '464px',
        loginElements: '434px'
      },
      height: {
        imgOffer: '133px'
      }
    }
  },
  plugins: [],
}

