module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow':
          '0px 0px 0px 3px #72baed, 10px -10px 0px 0px #72baed, -10px 10px 0px 0px #6c8593',
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
      colors: {
        headerColor: '#72baed',
        uiBorderColor: '#3a81bb',
        uiButtonColor: '#3a81bb',
        retroBlue: '#598fb5',
        retroGreen: '#017D7D',
        buttonHover: '#01017E',
        textBg: '#C0C0C0',
      },
      margin: {},
    },
  },
  plugins: [],
};
