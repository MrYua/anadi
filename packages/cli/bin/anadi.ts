#!/usr/bin/env node
import { Command } from "commander";
import { getCLIVersion } from "../src/utilties/file.js";

async function bootstrap() {
  const program = new Command();

  const version = getCLIVersion();

  program
    .version(`anadi ${version}`, "-v, --version", "Output the current version.")
    .usage("<command> [options]")
    .helpOption("-h, --help", "Output usage information.");

  program
    .command("gen [name]")
    .description("Generate cli application")
    .option("-n, --name <applicationName>", "Application name")
    .option("-s, --sfc", "Generate files in sfc format")
    .option("-t, --tsx", "Generate files in tsx format")
    .option("-l, --locale", "Generator internationalized files")
    .action(async (name: string, command: Command) => {
      const { gen } = await import("../src/commands/gen.js");

      return gen({ ...command, name });
    });

  program.parse();
}

bootstrap();
