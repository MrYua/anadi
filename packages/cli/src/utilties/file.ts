import fse from "fs-extra";
import { CLI_PACKAGE_JSON } from "../settings/constant.js";

const { readJSONSync } = fse;

export function getCLIVersion() {
  return readJSONSync(CLI_PACKAGE_JSON).version;
}
