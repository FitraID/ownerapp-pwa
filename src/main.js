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

Vue.config.productionTip = false;
VueClipboard.config.autoSetContainer = true;

Vue.use(VueClipboard);
Vue.use(BootstrapVue);
Vue.use(PerfectScrollbar);

const globalVariable = {  
  data(){
    return {
      urlcloud: 'https://cloudinventory.nustrastudio.com/api/'
    }
  }
}

Vue.prototype.$http-axios 
Vue.mixin(globalVariable);

axios.defaults.baseURL ='https://cloudinventory.nustrastudio.com/api/'

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
