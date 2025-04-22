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
        'luxury-charcoal': '#1e293b', // Slate-900 - elegant dark color for header
        'luxury-slate': '#334155',   // Slate-700 - complementary to luxury-dark
        'luxury-light': '#f8fafc',   // Slate-50 - light color for text on dark backgrounds
        'luxury-accent': '#e5e7eb',  // Gray-200 - subtle accent color
        'luxury-gold-light': '#f7f0d7', // Lighter version of luxury gold for hover effects
      },
    },
  },
  plugins: [],
}
