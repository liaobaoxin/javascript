import Vue from 'vue';

import login from './login.vue';

new Vue({
    el: "#app",
    data: {
        msg: "你好"
    },
    render: c => c(login)

});


import name,{m as m1,m1 as m2} from './test.js'
console.log(name);
console.log(m1);
console.log(m2);