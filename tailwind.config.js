const { heroui } = require('@heroui/react')

module.exports = {
  content: [
    './components/**/*.tsx',
    './pages/**/*.tsx',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      cursive: ['"Dancing Script"', 'cursive'],
      regular: [
        'Lato',
        '-apple-system',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'sans-serif',
      ],
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            img: { 'margin-top': 0 },
          },
        },
      },
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography'), heroui()],
}
