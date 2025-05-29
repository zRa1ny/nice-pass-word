import { defineConfig } from 'vite';
import babel from '@rollup/plugin-babel';
export default defineConfig({
    plugins: [
        babel({
            babelHelpers: 'bundled',
            presets: [
                [
                    '@babel/preset-env',
                    {
                        targets: {
                            browsers: [
                                "last 2 versions",
                                "> 1%",
                                "not dead",
                                "ie >= 8"
                            ]
                        },
                        useBuiltIns: false,
                        corejs: 3,
                    }
                ]
            ],
            exclude: 'node_modules/**' // 只转换源代码
        })
    ],
    build: {
        lib: {
            entry: 'src/index.js',
            name: 'NicePassWord',
            formats: ["es", "cjs", 'umd'],
            fileName: (format) => `nice-password.${format}.min.js`
        },
        minify: true,
    },
    server: {
        open: 'src/index.html'
    }
});