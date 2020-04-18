
import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import router from '@/router/index';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import '@/assets/styles/index.scss';

import App from './app.vue';

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

const axiosInstance = axios.create({
  baseURL: 'https://reqres.in/api',
});

Vue.use(VueAxios, axiosInstance);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
