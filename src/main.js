import Vue from "vue";
import App from "./App.vue";
import Home from "./components/Home.vue";
import Holly from "./components/Holly/Holly.vue";
import VueRouter from "vue-router";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  {path: "/", component: Home},
  {path: "/holly", component: Holly}
]

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
