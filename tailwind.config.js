/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,njk,md}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        'ottawa-blue': '#3949ab',  // Custom blue color for Ottawa Opal Shop
        'ottawa-dark-blue': '#1a237e',  // Darker blue color for welcome bar
        'luxury-gold': '#d4af37',  // Luxury gold color
        'luxury-dark': '#2c3e50',  // Professional dark color for footer
      },
    },
  },
  plugins: [],
}
