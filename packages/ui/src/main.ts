import "@/plugins/uno.css";
import "@/design/index.less";

import { createApp } from "vue";
import App from "@/App.vue";
import { setupGrid } from "@/plugins/grid";
import { setupElementPlus } from "@/plugins/element";

async function bootstrap() {
  const app = createApp(App);

  setupElementPlus(app);

  setupGrid(app);

  app.mount("#app");
}

bootstrap();
