import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    copyPublicDir: false,
    target: "esnext",
    // This is only on lib mode no module federation
    //lib: {
    //   entry: resolve(__dirname, "src/components"),
    //   name: "stardustDesignSystem",
    //   fileName: "stardustds",
    // },
    // rollupOptions: {
    //   external: ["react", "react-dom", "react/jsx-runtime"],
    //   output: {
    //     globals: {
    //       react: "React",
    //       "react-dom": "ReactDOM",
    //       "react/jsx-runtime": "react/jsx-runtime",
    //     },
    //   },
    // },
  },
  plugins: [
    react(),
    federation({
      name: "stardust",
      filename: "remoteEntry.js",
      exposes: {
        "./button": "./src/components/button.tsx",
      },
      shared: ["react", "react-dom"],
    }),
    dts(),
  ],
});
