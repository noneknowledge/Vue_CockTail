import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/test_github_deploy/',
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    // treat all components starting with `my-lit` as custom elements
                    isCustomElement: (tag) => tag.includes('-')
                }
            }
        }),
        vueJsx()
    ],
    server: {
        port: 3000
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
