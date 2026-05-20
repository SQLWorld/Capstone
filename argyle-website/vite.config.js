import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    // Site is deployed to GitHub Pages at /Capstone/, use that as the base path.
    // This ensures built asset URLs include the /Capstone/ prefix.
    base: '/Capstone/',
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})
