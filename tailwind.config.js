const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,vue}",
    ],
    theme: {
        extend: {
        },
        fontFamily: {
            sans: [
                '"Quicksand"',
                'sans-serif',
                ...defaultTheme.fontFamily.sans
            ],
        }
    },
    plugins: [],
}

