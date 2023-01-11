/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        efi_green: '#4CC7A0',
        efi_darkGreen: '#1B4739',
        efi_mildGreen: '#3B9477',
        efi_lightGreen: '#C4FFEC',
        efi_freshGreen: '#D1EF5E',
        efi_mailGreen: '#D7FCE1',
        efi_mildGold: '#FFAC3C',
        efi_gold: '#FFD147',
        efi_lightGold: '#FFEBA0',
        efi_orange: '#FF8831',
        efi_mildBlue: '#00949A',
        efi_blueFarm: '#53C8E0',
        primary: '#379477',
        secondary: '#54BE9C',
        colorTosca: '#D7E9E3',
        darkGray: '#393939',
        colorGray: '#797979',
        lightGray: '#ECECEC',
        colorYellow: '#FFEC94',
      },
      fontFamily: {
        sora: ["Sora"]
      },
    },
  },
  plugins: [],
}
