import { createApp } from "vue";
import App from "./App.vue";

import "./styles/tokens.css";
import "./styles/global.css";

import { router } from "./app/router.js";

createApp(App).use(router).mount("#app");
const loader = document.getElementById("app-loading");
if (loader) {
  loader.classList.add("is-hiding");
  window.setTimeout(() => loader.remove(), 200);
}
