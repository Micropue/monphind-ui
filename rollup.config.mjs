/** @type {import('rollup').RollupOptions} */
/** 
 * @type {import('@rollup/plugin-terser').terser}
 */
import terser from '@rollup/plugin-terser'
export default {
    input: "./dist/main.js",
    output: [
        {
            file: "./dist/monphind.min.js",
            format: "iife",
            name: "monphind",
            compact: true,
            plugins: [terser()]
        },
        {
            file: "./dist/monphind.js",
            format: "iife",
            name: "monphind",
            compact: true,
            plugins: [terser({
                format: {
                    semicolons: false
                }
            })]
        }
    ],
}