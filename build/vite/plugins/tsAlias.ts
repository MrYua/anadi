import { type Plugin, type AliasOptions } from "vite";
import { readJSON } from "../../utilities/readJSON";
import { getProperty } from "../../utilities/path";

interface CompilerOptions {
  baseUrl?: string;
  paths?: Record<string, string[]>;
}

interface TsConfig {
  compilerOptions: CompilerOptions;
}

interface Options {
  dir?: string;
  alias?: AliasOptions;
}

export function tsAliasPlugin(options: Options = {}): Plugin {
  return {
    name: "vite:ts-alias",
    enforce: "pre",
    async config() {
      const { dir = "tsconfig.json", alias: sourceAlias } = options;

      const { baseUrl, paths } = readJSON<TsConfig>(dir).compilerOptions;

      const alias = Object.entries(paths).map(([key, value]) => {
        return {
          find: key.replace("/*", ""),
          replacement: getProperty(value[0].replace(/\/\*/, ""), baseUrl),
        };
      });

      return {
        resolve: {
          alias: sourceAlias || alias,
        },
      };
    },
  };
}

export default tsAliasPlugin;
