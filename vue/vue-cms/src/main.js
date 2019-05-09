import Vue from 'vue'
import VueRouter from 'vue-router'

import './lib/css/mui.css'
import './lib/css/icons-extra.css'

import { Header,Swipe, SwipeItem  } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);

/*引入资源请求插件*/
import VueResource from 'vue-resource'

/*使用VueResource插件*/
Vue.use(VueResource)

import router from "./router.js"

import app from './app.vue'

Vue.use(VueRouter);
import 'mint-ui/lib/style.css'
new Vue({
    el:"#app",
    render:c=>c(app),
    router
});

