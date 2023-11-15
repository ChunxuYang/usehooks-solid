import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import solid from "vite-plugin-solid";

export default defineConfig({
  plugins: [solid(), dts()],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "usehooks-solid",
      fileName: "usehooks-solid",
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["solid-js", "solid-js/web"],
      output: {
        globals: {
          "solid-js": "solid",
          "solid-js/web": "solid",
        },
      },
    },
  },
});
