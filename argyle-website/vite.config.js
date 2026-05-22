import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    // GitHub Pages serves the site under /Capstone/; Vercel serves at root.
    base: process.env.VERCEL ? '/' : '/Capstone/',
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})
