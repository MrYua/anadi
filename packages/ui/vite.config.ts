import { defineConfig } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import vue from "@vitejs/plugin-vue";
import jsx from "@vitejs/plugin-vue-jsx";
import uno from "@unocss/vite";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

function pathResolve(dir: string) {
  return path.resolve(dirname, dir);
}

export default defineConfig({
  resolve: {
    alias: {
      "@": pathResolve("src"),
      "#": pathResolve("types"),
    },
  },
  plugins: [vue(), jsx(), uno()],
});
