import { type PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";
import jsx from "@vitejs/plugin-vue-jsx";
import macros from "unplugin-vue-macros/vite";
import unoCSS from '@unocss/vite'
import tsAlias from "./tsAlias";
import html from "./html";

export function createVitePlugins(viteEnv: ViteEnv) {
  const plugins: (PluginOption | PluginOption[])[] = [
    macros({
      hoistStatic:true,
      plugins: {
        vue: vue(),
        vueJsx: jsx(),
      },
    }),
    tsAlias(),
    html(),
    unoCSS()
  ];

  return plugins;
}
