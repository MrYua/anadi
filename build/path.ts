import path from "path";

export const NODE_ROOT = process.cwd();

export function getProperty(dir: string) {
  return path.resolve(NODE_ROOT, ".", dir);
}
