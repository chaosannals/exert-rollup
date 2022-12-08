import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve';
// import nodePolyfills from 'rollup-plugin-polyfill-node';
import builtins from 'rollup-plugin-node-builtins';

export default [{
  input: "main/browser.ts",
  plugins: [
    builtins(),
    // nodePolyfills(),
    nodeResolve({
      browser: true,
    }),
    commonjs({
      include: /node_modules/
    }),
    typescript(),
  ],
  onwarn: function (warning) {
    if (warning.code === 'THIS_IS_UNDEFINED') {
      return;
    }
    if (warning.code === 'CIRCULAR_DEPENDENCY') {
      return;
    }
    console.error(warning.message);
  },
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
    builtins(),
    // nodePolyfills(),
    nodeResolve({
      browser: true,
    }),
    commonjs({
      include: /node_modules/
    }),
    typescript(),
  ],
  onwarn: function (warning) {
    if (warning.code === 'THIS_IS_UNDEFINED') {
      return;
    }
    if (warning.code === 'CIRCULAR_DEPENDENCY') {
      return;
    }
    console.error(warning.message);
  },
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
    builtins(),
    // nodePolyfills(),
    nodeResolve({
      browser: true,
    }),
    commonjs({
      include: /node_modules/
    }),
    typescript(),
  ],
  onwarn: function (warning) {
    if (warning.code === 'THIS_IS_UNDEFINED') {
      return;
    }
    if (warning.code === 'CIRCULAR_DEPENDENCY') {
      return;
    }
    console.error(warning.message);
  },
  output: {
    dir: "dist",
    name: "exert",
    format: "umd",
    sourcemap: true,
  },
  external: ['vue'],
}];
