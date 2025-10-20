module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#004AAD',
        accent: '#FFD700',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        slideUp: {
          'from': { 
            transform: 'translateY(20px)',
            opacity: '0',
          },
          'to': { 
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
      backgroundImage: {
        'grid': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23e5e7eb'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
      },
      backgroundSize: {
        'grid-size': '32px 32px',
      }
    },
  },
  plugins: [],
}