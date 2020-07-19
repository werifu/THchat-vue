import Vue from 'vue';
import Vuex from 'vuex';
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
Vue.use(Vuex);

var store = new Vuex.Store({
  state: {
    isLogin: false,
    username: '',
  },
  mutations: {
    login: (state, username) => {state.isLogin = true; state.username = username;},
    logout: state => state.isLogin = false,
    setName: (state, newName) => state.username = newName,
  }
})

new Vue({
  el: '#app',
  store,
  router: Router,
  render: h => h(App),
});

