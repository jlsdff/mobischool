/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': 'Montserrat',
        'roboto': "Roboto"
      },
      colors: {
        'primary': "#219EBC",
        'primary-light': "#8ECAE6",
        'primary-dark': "#023047",
        'accent': "#FFB703",
        'accent-dark': "#FB8500",
        'txt-light1': "#f8f9fa",
        'txt-light2': "#E9ECEF",
        'txt-dark': "#212529",
        'txt-dark2': "#343A40",
        'neutral1': "#f8f9A",
        'neutral2': "#e9ecef",
        'neutral3': "#dee2e6",
        'neutral4': "#ced4da",
        'neutral5': "#adb5bd",
        'neutral6': "#6C757D",
        'neutral7': "#495057",
        'neutral8': "#343A40",
        'neutral9': "#212529",
      }
    },
  },
  plugins: [],
}

