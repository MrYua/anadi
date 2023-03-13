import { defineConfig } from "@unocss/vite";
import presetUno from '@unocss/preset-uno';
import transformerDirectives from '@unocss/transformer-directives';

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
  presets: [presetUno({ dark: 'class' })],
  transformers: [transformerDirectives()],
});
