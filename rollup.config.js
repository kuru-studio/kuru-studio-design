import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import jsx from 'rollup-plugin-jsx';

export default {
  input: 'src/main.ts',
  output: [
    {
      file: 'dist/main.umd.js',
      format: 'umd',
      name: 'main.umd',
      globals: {
        antd: 'antd'
      }
    },
    {
      file: 'dist/main.esm.js',
      format: 'esm',
      name: 'main.esm',
      globals: {
        antd: 'antd'
      }
    },
  ],
  external: ['react', 'react-dom', 'antd'],
  plugins: [
    commonjs(),
    typescript(),
    jsx({factory: 'React.createElement'})
  ],
};
