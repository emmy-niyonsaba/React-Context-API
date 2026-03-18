/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        'primary-dark': '#4f46e5',
        'primary-light': '#818cf8',
        secondary: '#0ea5e9',
        'secondary-dark': '#0284c7',
        success: '#10b981',
        danger: '#ef4444',
        warning: '#f59e0b',
        'bg-primary': '#0f172a',
        'bg-secondary': '#1e293b',
        'bg-tertiary': '#334155',
        'text-primary': '#f1f5f9',
        'text-secondary': '#cbd5e1',
        'border-color': '#475569',
      },
      boxShadow: {
        glass: '0 20px 25px -5px rgba(0, 0, 0, 0.5)',
        'glass-lg': '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
      },
      backgroundColor: {
        dark: '#0f172a',
      },
    },
  },
  plugins: [],
}
