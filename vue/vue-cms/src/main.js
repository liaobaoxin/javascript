import Vue from 'vue'
import VueRouter from 'vue-router'

import './lib/css/mui.css'
import './lib/css/icons-extra.css'

import { Header,Swipe, SwipeItem,Button  } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
import {Lazyload} from 'mint-ui';
Vue.use(Lazyload);


/*引入资源请求插件*/
import VueResource from 'vue-resource'

/*使用VueResource插件*/
Vue.use(VueResource);
Vue.http.options.root = 'http://www.liulongbin.top:3005/api/';
import router from "./router.js"

import app from './app.vue'

Vue.use(VueRouter);
import 'mint-ui/lib/style.css'

import moment from 'moment';
//定义全局过滤器
Vue.filter('dateFormat',(dataStr,pattern="YYYY-MM-DD  hh:mm:ss")=> moment(dataStr).format(pattern));

new Vue({
    el:"#app",
    render:c=>c(app),
    router
   
});

