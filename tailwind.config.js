/** @type {import('tailwindcss').Config} */
//eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: 'Roboto, monospace',
    },

    extend: {
      height: {
        screen: '100dvh',
      },
      colors: {
        'grey-0': 'var(--color-grey-0)',
        'grey-0.5': 'var(--color-grey-50)',
        'grey-1': 'var(--color-grey-100)',
        'grey-2': 'var(--color-grey-200)',
        'grey-3': 'var(--color-grey-300)',
        'grey-4': 'var(--color-grey-400)',
        'grey-5': 'var(--color-grey-500)',
        'grey-6': 'var(--color-grey-600)',
        'grey-7': 'var(--color-grey-700)',
        'grey-8': 'var(--color-grey-700)',
        'grey-9': 'var(--color-grey-800)',

        'blue-1': 'var(--color-blue-100)',
        'blue-7': 'var(--color-blue-700)',
        'green-1': 'var(--color-green-100)',
        'green-7': 'var(--color-green-700)',
        'yellow-1': 'var(--color-yellow-100)',
        'yellow-7': 'var(--color-yellow-700)',
        'silver-1': 'var(--color-silver-100)',
        'silver-7': 'var(--color-silver-700)',
        'indigo-1': 'var(--color-indigo-100)',
        'indigo-7': 'var(--color-indigo-700)',

        'red-1': 'var(--color-red-100)',
        'red-7': 'var(--color-red-700)',
        'red-8': 'var(--color-red-800)',

        'brand-0.5': 'var(--color-brand-50)',
        'brand-1': 'var(--color-brand-100)',
        'brand-2': 'var(--color-brand-200)',
        'brand-3': 'var(--color-brand-300)',
        'brand-4': 'var(--color-brand-400)',
        'brand-5': 'var(--color-brand-500)',
        'brand-6': 'var(--color-brand-600)',
        'brand-7': 'var(--color-brand-700)',
        'brand-8': 'var(--color-brand-800)',
        'brand-9': 'var(--color-brand-900)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
      },
    },
  },
  plugins: [],
};
