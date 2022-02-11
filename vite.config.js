import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import replace from '@rollup/plugin-replace'
// import testPlugin from './plugins/vite-test-plugin'
import image from '@rollup/plugin-image'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        replace({
            values: {
                __TEST__: '12434'
            },
            preventAssignment: true
        }),
        // testPlugin('post'),
        // testPlugin('pre'),
        {
            ...image(),
            enforce: 'pre'
        }
    ],
    optimizeDeps: {},
    resolve: {
        alias: {
            '@': '/src'
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData:
                    '$injectedColor: orange;' +
                    '$red: red;' +
                    '$blue: blue;'
            }
        }
    },
    server: {
        open: '/',
        proxy: {
            '/foo': 'http://localhost:4567',
            '/api': {
                target: 'http://jsonplaceholder.typicode.com',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, '')
            }
        }
    },
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: true,
        brotliSize: true,
        manifest: true,
        rollupOptions: {
            // 这块是兼容 rollup 的plugin,也可以放到前面的plugin中
            // plugins: {}
        }
    },
    // 这个是vite 独有的钩子
    config: {

    },
    //
    configResolved: {

    },
    configureServer: {

    },
    transformIndexHtml: {

    },
    handleHotUpdate: {

    }

})

// Prettier: 无法重新格式化: 不支持的软件包版本  请至少将 'prettier' 软件包升级到版本 1.13.0
