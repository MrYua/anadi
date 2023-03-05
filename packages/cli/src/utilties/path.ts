import { resolve } from "path";
import { fileURLToPath } from "url";
import { CWD } from "../settings/constant.js";

export function pathResolve(dir: string, root = CWD) {
  return resolve(root, ".", dir);
}

export function getDirname(url: string) {
  return fileURLToPath(new URL(".", url));
}
