import { defineConfig, type ConfigEnv } from "vite";
import { createVitePlugins } from "./build/vite/plugins";

export default defineConfig(async (env: ConfigEnv) => {
  return {
    plugins: createVitePlugins(env),
  };
});
