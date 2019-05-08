import Vue from 'vue'
import VueRouter from 'vue-router'

import './lib/css/mui.css'
import './lib/css/icons-extra.css'

import { Header } from 'mint-ui';
Vue.component(Header.name, Header);


import router from "./router.js"

import app from './app.vue'

Vue.use(VueRouter);
import 'mint-ui/lib/style.css'
new Vue({
    el:"#app",
    render:c=>c(app),
    router
});

