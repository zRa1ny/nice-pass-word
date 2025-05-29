import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
    plugins: [vue()],
    server: {
        port: 5173,
        open: true
    },
    // 构建配置
    build: {
        outDir: resolve(__dirname, 'docs-dist'),
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'docs/index.html')
            }
        }
    }
})