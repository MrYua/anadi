import path from "path";

export const NODE_ROOT = process.cwd();

export function getProperty(dir: string): string {
  return path.resolve(NODE_ROOT, ".", dir);
}

