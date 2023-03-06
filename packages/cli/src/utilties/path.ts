import { fileURLToPath } from "url";
import { resolve } from "path";
import { CWD } from "../settings/constant.js";

export function getDirname(url: string) {
  return fileURLToPath(new URL(".", url));
}

export function getRootPath(path: string) {
  return resolve(CWD, ".", path);
}