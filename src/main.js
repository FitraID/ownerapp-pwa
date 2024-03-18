import { BootstrapVue } from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";
import Vue from "vue";
import VueClipboard from "vue-clipboard2";
import PerfectScrollbar from "vue2-perfect-scrollbar";
import "vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css";
import App from "./App.vue";
import "./assets/css/custom.css";
import "./assets/css/style.css";
import router from "./router.js";
import axios from 'axios';

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

Vue.config.productionTip = false;
VueClipboard.config.autoSetContainer = true;

Vue.mixin({
  data() {
    return {
      urlcloud: 'https://cloudinventory.nustrastudio.com/api/'
    };
  }
});

Vue.prototype.url = 'https://inventory.cinta-bunda.com/api/'
Vue.use(VueClipboard);
Vue.use(BootstrapVue);
Vue.use(PerfectScrollbar);

Vue.prototype.$http-axios   

axios.defaults.baseURL ='https://cloudinventory.nustrastudio.com/api/'
