import Vue from 'vue';
import VueCookies from 'vue-cookies';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue';
import Router from './router/index.js';

import './static/ele-common.css'
import './static/router.css'

import axios from 'axios'
axios.defaults.withCredentials=true;//让ajax携带cookie
Vue.prototype.$axios = axios;
Vue.use(ElementUI);
Vue.use(VueCookies);

new Vue({
  el: '#app',
  // cookies: VueCookies,
  router: Router,
  render: h => h(App),
});

