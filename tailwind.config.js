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
    extend: {
      colors: {
        primary : '#519775',
        secundary: '#F39E6A',
        bgScreen: '#E9E9E9',
        bgGeneric: '#D9D9D9',
        bgPrimary: '#F1F1F1',
        bgSecundary: '#535353'
      },
      borderRadius: {
        button: '30px'  
      },
    },
  },
  plugins: [],
}

