import { path } from "ramda";
import logger from "../utilties/logger.js";
import { getAnadiConfig } from "../config/anadi.config.js";

export interface CreateCommandOptions {
  name?: string;
  locale?: boolean;
  sfc?: boolean;
  tsx?: boolean;
}

export async function create(options: CreateCommandOptions) {
  logger.title("\n📦📦 Create a component ! \n");

  const namespace = path(["namespace"], await getAnadiConfig());

  console.log(namespace)
}
