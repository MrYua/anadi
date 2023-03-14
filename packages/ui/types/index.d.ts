import type { App } from 'vue'

export const version: string
export const install: (app: App) => void



declare module 'vue' {
  export interface GlobalComponents {
    
  }
}
