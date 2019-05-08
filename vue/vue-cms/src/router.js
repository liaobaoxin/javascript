import VueRouter from 'vue-router'

import HomeContainer from './components/HomeContainer.vue';
import MemberContainer from './components/MemberContainer.vue';
import SearchContainer from './components/SearchContainer.vue';
import ShopcarContainer from './components/ShopcarContainer.vue';

// 3. 创建路由对象
var router = new VueRouter({
        routes :[
            {path:"/home",component:HomeContainer},
            {path:"/member",component:MemberContainer},
            {path:"/search",component:SearchContainer},
            {path:"/shopcar",component:ShopcarContainer}
        ],
        linkActiveClass:'mui-active'
    });

// 把路由对象暴露出去
export default router