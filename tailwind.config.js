module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
     initial: '0 1 auto',
     inherit: 'inherit',
      none: 'none',
     '2': '2 2 0%',
     '3': '3 3 0%',
     '4': '4 4 0%',
     '5': '5 5 0%',
    },
    textColor: theme => theme('colors'),
    textColor:{
      'orange': '#EA9828',
      'orangedark': '#de860d',
      'white': '#FFFFFF',
      'gray': '#7A7A7A',
      'dark-gray': '#474747',
      'light-gray': '#e0e0e0'
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'orange': '#EA9828',
      'orangelight': '#ffd7a3',
      'orangedark': '#de860d',
      'darkgray': '#474747'
    }),
    fontFamily:{
      'sans': [ 'Nunito']
    },
    extend: {

    },

    screens: {
      '1080': '1080px',
      '1250': '1250px',
      '900': '900px',
      '720': '720px',
      '480': '480px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
