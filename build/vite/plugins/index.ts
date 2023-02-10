import { type ConfigEnv, type PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";
import tsAlias from "./tsAlias";

export function createVitePlugins(env: ConfigEnv): PluginOption[] {
  const plugins = [vue(), tsAlias()];
  return plugins;
}
