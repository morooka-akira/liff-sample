// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('./tailwind.colors')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const width = require('./tailwind.width')

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        tablet: '640px',
        // => @media (min-width: 640px) { ... }

        laptop: '1024px',
        // => @media (min-width: 1024px) { ... }

        desktop: '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      colors: colors.colors,
      spacing: {
        sidebar: '12rem',
        sidebar_negative: '-12rem',
        content_width: 'calc(100vw - 12rem)',
      },
      width: width.width,
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
