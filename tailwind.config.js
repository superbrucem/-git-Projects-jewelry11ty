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
        'opal-green': '#10b981',     // Medium opal green
        'opal-green-light': '#d1fae5', // Light opal green for backgrounds
        'opal-green-dark': '#047857', // Dark opal green for accents
        'opal-teal': '#0d9488',      // Teal shade for variety
        'opal-blue': '#0ea5e9',      // Blue shade for variety
        'diamond-grey': '#f3f4f6',   // Light grey for diamond theme
        'diamond-grey-dark': '#9ca3af', // Darker grey for accents
        'diamond-green': '#065f46',  // Dark green for diamond theme
        'diamond-green-light': '#d1fae5', // Light green for subtle backgrounds
      },
    },
  },
  plugins: [],
}
