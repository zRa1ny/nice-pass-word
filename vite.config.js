import { defineConfig } from 'vite';
export default defineConfig({
    plugins: [],
    build: {
        minify: true,
        lib: {
            entry: './src/index.js',
            name: 'NicePassWord',
            formats: ["es", 'umd'],
            fileName: (format) => `nice-password.${format}.min.js`
        },

    }
});