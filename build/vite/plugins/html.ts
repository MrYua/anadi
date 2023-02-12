import { type Plugin } from "vite";
import { render } from "ejs";
import { minify,type Options as MinifyOptions } from "html-minifier-terser";

interface Options {
  title?: string;
  filename?: string;
  template?: string;
  inject?: "head" | "body" | "none";
  favicon?: string;
}

export function htmlPlugin(options: Options = {}): Plugin {
  return {
    name: "vite:html",
    enforce: "pre",
    transformIndexHtml(html, ctx) {
      return render(html, { title: "adsadasd" });
    },
  };
}

export default htmlPlugin;
