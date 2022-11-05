/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                josefin: ['"Josefin Sans"'],
            },
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: '#ffffff',
            purple: '#3f3cbb',
            midnight: '#121063',
            metal: '#565584',
            tahiti: '#3ab7bf',
            silver: '#ecebff',
            'bubble-gum': '#ff77e9',
            bermuda: '#78dcca',
            'baby-blue': '#a4ccdc',
            'angry-baby-blue': '#5ea1bd',
        },
    },
    plugins: [],
};
