import fse from "fs-extra";
import { pathToFileURL } from "url";
import { ANADI_CONFIG, SITE_CONFIG } from "../settings/constant.js";

const { pathExistsSync, statSync } = fse;

export interface AnadiConfig {}

export function defineConfig(config: AnadiConfig) {
  return config;
}

export async function getAnadiConfig() {
  const defaultConfig = (await import("./anadi.default.config.js")).default;

  // pathExistsSync(ANADI_CONFIG);
  console.log(pathToFileURL(ANADI_CONFIG))
}
