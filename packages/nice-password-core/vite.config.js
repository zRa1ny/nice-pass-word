import { defineConfig } from 'vite';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
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
                        // corejs: 3,
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
            fileName: (format) => `nice-password.${format}.min.js`,
        },
        minify: false,
        rollupOptions: {
            output: {
                plugins: [
                    terser({
                        mangle: false,
                        compress: {
                            // drop_console: true,
                            pure_funcs: ['console.log', 'console.warn']
                        }
                    })
                ],
            }
        }
    },

    server: {
        open: 'src/index.html'
    }
});