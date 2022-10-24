import typescript from '@rollup/plugin-typescript'

export default [{
    input: "main/browser.ts",
    plugins: [typescript()],
    output: {
      dir: "dist",
      name: "exert",
      format: "iife",
      sourcemap: true,
    },
    external: ['vue'],
  }, {
    input: "main/vue2.ts",
    plugins: [typescript()],
    output: {
      dir: "dist",
      name: "exert",
      format: "umd",
      sourcemap: true,
    },
    external: ['vue'],
  }, {
    input: "main/vue3.ts",
    plugins: [typescript()],
    output: {
      dir: "dist",
      name: "exert",
      format: "umd",
      sourcemap: true,
    },
    external: ['vue'],
  }];
  