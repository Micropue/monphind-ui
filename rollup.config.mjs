/** @type {import('rollup').RollupOptions} */
import terser from '@rollup/plugin-terser'
export default {
    input: "./dist/main.js",
    output: {
        file: "./dist/monphind.min.js",
        format: "iife",
        name: "monphind",
        compact: true
    },
    plugins: [terser()]
}