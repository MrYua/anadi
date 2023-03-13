import { App } from "vue";
import VueGridLayout from 'vue-grid-layout';

export function setupComponents(app: App) {
    app.use(VueGridLayout)
}
