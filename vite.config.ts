import { defineConfig, type ConfigEnv } from "vite";
import { createVitePlugins } from "./build/vite/plugins";

export default defineConfig(async (env: ConfigEnv) => {
  const { command, mode } = env;
  return {
    plugins: createVitePlugins(env),
  };
});
