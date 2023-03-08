import { getDirname,getRelPath } from "../utilties/path.js";

export const CWD = process.cwd();

export const DIRNAME = getDirname(import.meta.url);

export const CLI_PACKAGE_JSON = getRelPath('../../../package.json');

