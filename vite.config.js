import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    optimizeDeps: {},
    resolve: {
        alias: {
            '@': '/src'
        }
    },
    server: {
	    open: '/',
        proxy: {
            '/api': {
                target: 'http://jsonplaceholder.typicode.com',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, '')
            }
        }
    }
})

// Prettier: 无法重新格式化: 不支持的软件包版本  请至少将 'prettier' 软件包升级到版本 1.13.0
