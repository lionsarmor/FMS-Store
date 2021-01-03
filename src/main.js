import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import app from '@/app.css'
import style from '@/assets/style.css'
import VueAnalytics from 'vue-analytics';
import 'bootstrap';
import paypal from 'paypal-checkout';

Vue.use(VueAnalytics, {
  id: 'UA-120464878-1',
  router
});
Vue.use(paypal);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App, app, style)
}).$mount("#app");
