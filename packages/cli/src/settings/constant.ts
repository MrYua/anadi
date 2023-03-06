import { getDirname } from "../utilties/path.js";

export const CWD = process.cwd();

export const DIRNAME = getDirname(import.meta.url);
