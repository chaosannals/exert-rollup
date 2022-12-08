import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [{
    input: "main/browser.ts",
    plugins: [
      nodeResolve({
        browser: true,
      }),
      commonjs({
        include: /node_modules/
      }),
      typescript(),
    ],
    output: {
      dir: "dist",
      name: "exert",
      format: "iife",
      sourcemap: true,
    },
    external: ['vue'],
  }, {
    input: "main/vue2.ts",
    plugins: [
      nodeResolve({
        browser: true,
      }),
      commonjs({
        include: /node_modules/
      }),
      typescript(),
    ],
    output: {
      dir: "dist",
      name: "exert",
      format: "umd",
      sourcemap: true,
    },
    external: ['vue'],
  }, {
    input: "main/vue3.ts",
    plugins: [
      nodeResolve({
        browser: true,
      }),
      commonjs({
        include: /node_modules/
      }),
      typescript(),
    ],
    output: {
      dir: "dist",
      name: "exert",
      format: "umd",
      sourcemap: true,
    },
    external: ['vue'],
  }];
  