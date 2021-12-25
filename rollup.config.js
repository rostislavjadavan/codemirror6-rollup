import {nodeResolve} from "@rollup/plugin-node-resolve"
export default {
  input: "./editor.js",
  output: {
    name: "editor",
    file: "./editor.bundle.js",
    format: "iife"
  },
  plugins: [nodeResolve()]
}
