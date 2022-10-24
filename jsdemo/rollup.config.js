export default [{
  input: "main/browser.js",
  output: {
    dir: "dist",
    name: "exert",
    format: "iife",
  },
}, {
  input: "main/vue2.js",
  output: {
    dir: "dist",
    name: "exert",
    format: "umd",
  },
}, {
  input: "main/vue3.js",
  output: {
    dir: "dist",
    name: "exert",
    format: "umd",
  },
}];
