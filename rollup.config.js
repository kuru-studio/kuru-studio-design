import babel from '@rollup/plugin-babel';

// the entry point for the library
const input = 'src/main.js'

// 
var MODE = [
  {
    fomart: 'cjs'
  },
  {
    fomart: 'esm'
  },
  {
    fomart: 'umd'
  }
]




var config = []


MODE.map((m) => {
    var conf = {
        input: input,
        output: {
            // then name of your package
            name: "kuru-studio-design",
            file: `dist/index.${m.fomart}.js`,
            format: m.fomart,
            exports: "auto"
        },
        // this externelizes react to prevent rollup from compiling it
        external: ["react", /@babel\/runtime/],
        plugins: [
            // these are babel comfigurations
            babel({
                exclude: 'node_modules/**',
                plugins: ['@babel/transform-runtime'],
                babelHelpers: 'runtime'
            })
        ]
    }
    config.push(conf)
})

export default [
  ...config,
]
