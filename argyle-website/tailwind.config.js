/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                fivestar: {
                    gold: '#FFB800',      // primary gold/orange
                    'gold-light': '#FFD700', // lighter gold
                    'gold-dark': '#CC9500',  // darker gold
                    gray: '#1A1A1A',       // dark gray background
                    'gray-light': '#2D2D2D', // lighter gray
                    white: '#FFFFFF',      // pure white
                }
            },
            animation: {
                'marquee': 'marquee 30s linear infinite',
                'marquee-reverse': 'marquee 30s linear infinite reverse',
                'shimmer': 'shimmer 3s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                shimmer: {
                    '0%, 100%': { transform: 'translateX(-100%)' },
                    '50%': { transform: 'translateX(100%)' },
                },
            },
        },
    },
    plugins: [],
}
