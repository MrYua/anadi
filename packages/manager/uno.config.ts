import { defineConfig } from "@unocss/vite";
import presetUno from "@unocss/preset-uno";
import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
  exclude: [
    "node_modules",
    "dist",
    ".git",
    ".husky",
    ".vscode",
    "public",
    "build",
    "mock",
    "index.html",
  ],
  presets: [presetUno({ dark: "class" })],
  transformers: [transformerDirectives()],
  shortcuts: {
    "wh-full": "w-full h-full",
    "flex-1-hidden": "flex-1 overflow-hidden",
    "flex-col": "flex flex-col",
    "nowrap-hidden": "whitespace-nowrap overflow-hidden",
    "ellipsis-text": "nowrap-hidden text-ellipsis",
  },
  theme: {
    colors: {},
  },
});
