import { defineConfig } from "@unocss/vite";
import presetUno from "@unocss/preset-uno";

export default defineConfig({
  exclude: [
    "node_modules",
    "dist",
    ".git",
    ".husky",
    ".vscode",
    "public",
    "build",
  ],
  presets: [presetUno()],
  shortcuts: {
    "wh-full": "w-full h-full",
  },
  theme: {
    colors: {
        primary: 'var(--primary-color)',
    },
  },
});
