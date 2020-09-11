import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/Home.vue';
import Room from '../components/Room.vue';
import Error from '../components/Error.vue';
import Login from '../components/Login.vue';
import Signup from '../components/Signup.vue';
import NewRoom from '../components/NewRoom.vue';

Vue.use(VueRouter);
export default new VueRouter({
    name: 'Router',
    routes: [
        { path: '/', redirect: '/home'},
        { path: '/home', component: Home},
        { path: '/room/:name', component: Room},
        { path: '*', component: Error},
        { path: '/login', component: Login},
        { path: '/signup', component: Signup},
        { path: '/newroom', component: NewRoom},
      ]
})
