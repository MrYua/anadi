import fse from "fs-extra";
import { UI_PACKAGE_JSON } from "../settings/constant.js";

const { readJSONSync } = fse;

export function getVersion() {
  return readJSONSync(UI_PACKAGE_JSON).version;
}
