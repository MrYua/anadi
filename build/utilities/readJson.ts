import { readFileSync } from "fs";
import { parse } from "@babel/parser";
import generate from "@babel/generator";
import { getProperty } from "./path";

export function readJSON<T extends object>(dir: string): T {
  const file = readFileSync(getProperty(dir), "utf8");

  const ast = parse(`!${file}`);

  const { code } = generate.default(ast, {
    comments: false,
    compact: true,
    jsonCompatibleStrings: true,
  });

  try {
    return JSON.parse(code.replace(/(^!)|(;$)/g, ""));
  } catch (error) {
    return {} as T;
  }
}
