module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': '5px -5px 0px 0px #72baed, -5px 5px 0px 0px #ffecc4',
      },
      animation: {
        spin: 'spin 1s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      colors: {},
      margin: {},
    },
    // width: {
    //   headerWCustom: '4rem',
    // },
  },
  plugins: [],
};
