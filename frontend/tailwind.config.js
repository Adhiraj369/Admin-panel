/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",  // Adjust this if your source files are in a different directory
  ],
  theme: {
    extend: {
       boxShadow: {
        'custom': '0px 0px 40px rgba(58,129,241)',
        'input': '0px 0px 40px rgba(58,129,241)',
      },
    },
  },
  plugins: [],
}
