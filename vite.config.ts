import { defineConfig, type ConfigEnv } from "vite";
import jsx from "@vitejs/plugin-vue";

export default defineConfig(async (env: ConfigEnv) => {
  const { command, mode } = env;
  return {
    plugins: [jsx()],
  };
});
