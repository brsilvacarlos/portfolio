import Vue from 'vue'
import App from './App.vue'

import VueRouter from "vue-router";
import Routers from "./router.js";
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
import "animate.css/animate.css";

Vue.use(VueRouter);
Vue.use(ViewUI);

// The routing configuration
const RouterConfig = {
  routes: Routers
};
const router = new VueRouter(RouterConfig);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
