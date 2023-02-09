import path from "path";
import { type ConfigEnv, type PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";
import jsx from "@vitejs/plugin-vue-jsx";

export function createVitePlugins(env: ConfigEnv): PluginOption[] {

  const plugins = [vue(), jsx()];

  return plugins;
}
