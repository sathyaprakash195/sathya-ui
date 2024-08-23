import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import packageJson from "./package.json";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      }, // for CommonJS modules
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      }, // for ES6 modules
    ],
    plugins: [
      peerDepsExternal(), // for excluding peer dependencies
      resolve(), // for resolving node_modules packages
      commonjs(), // for converting CommonJS modules to ES6
      typescript({ tsconfig: "./tsconfig.json" }), // for converting TypeScript to JavaScript
      terser(), // for minifying the output
      postcss(), // for processing CSS files
    ],
    external: ["react", "react-dom"], // for excluding dependencies
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
    external: [/\.css$/], 
  }, // for generating type definitions
];
