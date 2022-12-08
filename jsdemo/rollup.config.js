import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [{
  input: "main/browser.js",
  output: {
    dir: "dist",
    name: "exert",
    format: "iife",
  },
  plugins: [
    nodeResolve({
      browser: true,
    }),
    commonjs({
      include: /node_modules/
    }),
  ],
}, {
  input: "main/vue2.js",
  output: {
    dir: "dist",
    name: "exert",
    format: "umd",
  },
  plugins: [
    nodeResolve({
      browser: true,
    }),
    commonjs({
      include: /node_modules/
    }),
  ],
}, {
  input: "main/vue3.js",
  output: {
    dir: "dist",
    name: "exert",
    format: "umd",
  },
  plugins: [
    nodeResolve({
      browser: true,
    }),
    commonjs({
      include: /node_modules/
    }),
  ],
}];
