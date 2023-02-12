import { defineConfig, type ConfigEnv } from "vite";
import { createVitePlugins } from "./build/vite/plugins";
import { createViteAlias } from "./build/vite/alias";
import { NODE_ROOT as root } from "./build/path";

export default defineConfig(async (env: ConfigEnv) => {
  return {
    root,
    plugins: createVitePlugins({
      VITE_HTTPS: "none",
    }),
    resolve: {
      alias: createViteAlias(),
    },
    build: {
     
    },
  };
});
