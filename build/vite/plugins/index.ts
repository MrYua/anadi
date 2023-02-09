import { type ConfigEnv, type PluginOption } from "vite";
import jsx from "@vitejs/plugin-vue";

export function createVitePlugins(env: ConfigEnv): PluginOption[] {
  const plugins = [jsx()];

  return plugins;
}
