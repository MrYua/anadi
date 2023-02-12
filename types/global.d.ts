import type {} from "vue";

declare global {
  interface ViteEnv {
    VITE_HTTPS: "github" | "coding" | "none";
  }
}
