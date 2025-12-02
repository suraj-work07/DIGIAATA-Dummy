/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2c3e50',
        'secondary': '#f1c40f',
        'background': '#fdfaf6',
        'surface': '#ffffff',
        'accent': '#e67e22',
        'text-primary': '#2c3e50',
        'muted': '#95a5a6',
      },
      fontFamily: {
        sans: ['Roboto', 'Noto Sans', 'system-ui', 'sans-serif'], // Default body font
        heading: ['Poppins', 'Inter', 'sans-serif'], // Headings font
      },
      borderRadius: {
        'xl': '12px',
      },
      boxShadow: {
        'soft-warm': '0 6px 20px rgba(90, 60, 50, 0.08)',
      }
    },
  },
  plugins: [],
}
