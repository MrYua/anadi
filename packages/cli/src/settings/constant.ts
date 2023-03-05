import { pathResolve } from "../utilties/path.js";
import { getDirname } from "../utilties/path.js";

export const dirname = getDirname(import.meta.url);

export const CWD = process.cwd();

export const ANADI_CONFIG = pathResolve("anadi.config.mjs");

export const SITE_CONFIG = pathResolve(".anadi/site.config.json");

export const UI_PACKAGE_JSON = pathResolve("../../../package.json", dirname);

export const GENERATORS_DIR = pathResolve("../template/generators", dirname);

export const SRC_DIR = pathResolve("src");

export const ES_DIR = pathResolve("es");

export const LIB_DIR = pathResolve("lib");

export const UMD_DIR = pathResolve("umd");

export const HL_DIR = pathResolve("highlight");
