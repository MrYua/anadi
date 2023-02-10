import { readFileSync } from "fs";
import { type Plugin, type AliasOptions } from "vite";
import { getProperty } from "../../utilities/path";

interface CompilerOptions {
  baseUrl?: string;
  paths?: Record<string, string[]>;
}

interface Options {
  dir?: string;
  alias?: AliasOptions;
}

export function tsAliasPlugin(options: Options = {}): Plugin {
  return {
    name: "vite:ts-alias",
    enforce: "pre",
    async config(config) {
      const alias = [
        {
          find: "@",
          replacement: getProperty("src"),
        },
      ];

      const tsconfig = readFileSync(getProperty("tsconfig.json"), "utf-8");

      tsconfig.split('').forEach(element => {
        console.log(element)
      });

      return {
        resolve: {
          alias,
        },
      };
    },
  };
}

export default tsAliasPlugin;
