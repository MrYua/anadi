#!/usr/bin/env node
import { Command } from "commander";
import { fileURLToPath } from "url";

async function bootstrap() {
  const program = new Command();

  program.version(`varlet-cli`).usage("<command> [options]");

  console.log(new URL(".","https://juejin.cn/user"));
}

bootstrap();
