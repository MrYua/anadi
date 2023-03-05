import inquirer from "inquirer";
import { resolve } from "path";
import fse from "fs-extra";
import { CWD, GENERATORS_DIR } from "../settings/constant.js";
import logger from "../utilties/logger.js";

const { prompt } = inquirer;
const { pathExistsSync, copy, rename } = fse;

export interface GenCommandOptions {
  name?: string;
  i18n?: boolean;
  sfc?: boolean;
  tsx?: boolean;
}

export type CodeStyle = "tsx" | "sfc";

function syncVersion(name: string) {
  
}

export async function gen(options: GenCommandOptions) {
  logger.title("\n📦📦 Generate cli application ! \n");

  const { name } = options.name
    ? options
    : await prompt({
        name: "name",
        message: "Name of the generate application: ",
        default: "anadi-cli-app",
      });

  const dest = resolve(CWD, name);

  if (pathExistsSync(dest)) {
    logger.error(`${name} already exists and cannot be recreated...`);
    return;
  }

  let codeStyle: CodeStyle;

  if (options.sfc || options.tsx) {
    codeStyle = options.sfc ? "sfc" : "tsx";
  } else {
    const { style } = await prompt({
      name: "style",
      type: "list",
      message: "Please select your component library programming format",
      choices: ["sfc", "tsx"],
    });

    codeStyle = style;
  }

  const { i18n } = options.i18n
    ? options
    : await prompt({
        name: "i18n",
        type: "confirm",
        message: "Whether to use i18n?",
        default: false,
      });

  const dirName = i18n ? "i18n" : "default";
  const base = resolve(GENERATORS_DIR, "base");
  const configBase = resolve(GENERATORS_DIR, "config", dirName, "base");
  const code = resolve(GENERATORS_DIR, "config", dirName, codeStyle);

  await copy(base, dest);
  await copy(configBase, dest);
  await copy(code, dest);
  await rename(resolve(dest, "_gitignore"), resolve(dest, ".gitignore"));

  logger.success("✨ Application generated successfully!");
  logger.info(`\
  cd ${"asdas"}
  git init (Generating .git folder to init git hooks)
  pnpm install
  pnpm dev`);
  logger.success(`\
=======================
  Good luck have fun
=======================\
      `);
}
