import { App } from "vue";
import VueGridLayout from "vue-grid-layout";

export function setupGrid(app: App<Element>) {
  app.use(VueGridLayout);
}
