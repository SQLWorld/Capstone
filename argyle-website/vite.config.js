import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    // Allow overriding the base at build time with VITE_BASE environment variable.
    // Default to '/' so builds work when deployed to the site root (Netlify/Vercel).
    // If you need the GitHub Pages subpath, set VITE_BASE=/Capstone/ in CI or build env.
    base: process.env.VITE_BASE || '/',
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})
