import Vue from 'vue';

import login from './login.vue';

new Vue({
    el: "#app",
    data: {
        msg: "你好"
    },
    render:function (c) {
        return c(login)
    }
});