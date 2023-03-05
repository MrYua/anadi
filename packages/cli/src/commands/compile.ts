import fse from "fs-extra";
import { ES_DIR, HL_DIR, LIB_DIR, UMD_DIR } from "../settings/constant.js";

const { remove } = fse;

export function removeDir() {
  return Promise.all([
    remove(ES_DIR),
    remove(LIB_DIR),
    remove(HL_DIR),
    remove(UMD_DIR),
  ]);
}

export async function compile() {
  process.env.NODE_ENV = "compile";

  await removeDir()
}
