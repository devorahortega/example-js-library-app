import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { Calendar } from "@fullcalendar/core";
import listPlugin from "@fullcalendar/list";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

let calendar = new Calendar(calendarEl, {
  plugins: [listPlugin],
  initialView: "listWeek",
});
