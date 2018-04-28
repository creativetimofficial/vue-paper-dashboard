import Vue from "vue";
import App from "./App";
import router from "./router/index";
import liveDemo from './plugins/liveDemo';
import PaperDashboard from "./plugins/paperDashboard";
Vue.use(PaperDashboard);
Vue.use(liveDemo);

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
