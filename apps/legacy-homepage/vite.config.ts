import react from "@vitejs/plugin-react-swc";
import { createRequire } from "module";
import path from "path";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

const require = createRequire(import.meta.url);
const polyfillsRoot = path.dirname(
  path.dirname(require.resolve("vite-plugin-node-polyfills"))
);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      globals: {
        process: true,
      },
      // Whether to polyfill `node:` protocol imports.
      protocolImports: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "vite-plugin-node-polyfills/shims/buffer": path.join(
        polyfillsRoot,
        "shims/buffer/dist/index.js"
      ),
      "vite-plugin-node-polyfills/shims/global": path.join(
        polyfillsRoot,
        "shims/global/dist/index.js"
      ),
      "vite-plugin-node-polyfills/shims/process": path.join(
        polyfillsRoot,
        "shims/process/dist/index.js"
      ),
    },
  },
});
