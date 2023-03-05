#!/usr/bin/env node
import { Command } from "commander";
import { getVersion } from "../src/utilties/fs.js";

const program = new Command();

console.log(import.meta.url)

const version = getVersion();

program
  .name("anadi")
  .usage("<command> [options]")
  .version(version, "-v, --version", "display version number");

program
  .command("gen")
  .description("Generate cli application")
  .option("-n, --name <applicationName>", "Application name")
  .option("-s, --sfc", "Generate files in sfc format")
  .option("-t, --tsx", "Generate files in tsx format")
  .option("-l, --locale", "Generator internationalized files")
  .action(async (option) => {
    const { gen } = await import("../src/commands/gen.js");

    return gen(option);
  });

// program
//   .command("create")
//   .description("Create a component directory")
//   .option("-n, --name <componentName>", "Component name")
//   .option("-s, --sfc", "Generate files in sfc format")
//   .option("-t, --tsx", "Generate files in tsx format")
//   .option("-l, --locale", "Generator internationalized files")
//   .action(async (options) => {
//     const { create } = await import("../src/commands/create.js");

//     return create(options);
//   });

// program
//   .command("build")
//   .description('alias of "anadi build" in the current project')
//   .action(async () => {
//     const { build } = await import("../src/commands/build.js");

//     return build();
//   });

// program
//   .command("compile")
//   .description("Compile varlet components library code")
//   .action(async () => {
//     const { compile } = await import("../src/commands/compile.js");

//     return compile();
//   });

program.parse();
