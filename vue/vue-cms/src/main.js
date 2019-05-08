import Vue from 'vue'
import './lib/css/mui.css'
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

import app from './app.vue'


import 'mint-ui/lib/style.css'
new Vue({
    el:"#app",
    render:c=>c(app)
})

