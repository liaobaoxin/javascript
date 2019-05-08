import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import './lib/css/mui.css'
import './lib/css/icons-extra.css'

import { Header } from 'mint-ui';
Vue.component(Header.name, Header);


import router from "./router.js"

import app from './app.vue'


import 'mint-ui/lib/style.css'
new Vue({
    el:"#app",
    router,
    render:c=>c(app)
});

