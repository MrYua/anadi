import { getProperty } from "../path";

export function createViteAlias() {
  return {
    "@": getProperty("src"),
    "#": getProperty("types"),
    "~": getProperty("build"),
  };
}
