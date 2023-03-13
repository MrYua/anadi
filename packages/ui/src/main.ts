import "@/plugins/uno.css";

import { createApp } from "vue";
import App from "@/App.vue";
import { setupComponents } from "@/plugins/components";

async function bootstrap() {
  const app = createApp(App);

  setupComponents(app);

  app.mount("#app");
}

bootstrap();
