import fse from "fs-extra";
import { SRC_DIR } from "../settings/constant.js";
import { getAnadiConfig } from "../config/anadi.config.js";

const { ensureDirSync } = fse;

export async function build() {
  process.env.NODE_ENV = "production";

  ensureDirSync(SRC_DIR);

  const config = await getAnadiConfig();
  console.log(config);
}
