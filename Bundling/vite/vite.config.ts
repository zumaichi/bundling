import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import compression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    checker({ typescript: true }),
    compression({ algorithm: "gzip", threshold: 0 }), // despeus de qubrme mucho la cabeza ,la ia me dio la clave,los archivos no se comprimian por ocupar menos de 1KB y hay q utilizar threshold para forzarlo a crear la compresion.
    compression({ algorithm: "brotliCompress", ext: ".br", threshold: 0 }),
    visualizer({ open: false }),
  ],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
