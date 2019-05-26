<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
                <router-link v-bind:to="'/home/newsList/'+item.id" class="">
                    <img class="mui-media-object mui-pull-left"
                         :src="item.img_url">
                    <div class="mui-media-body">
                        <h1>{{item.title}}</h1>
                        <p class="mui-ellipsis">
                            <span>发表时间：{{item.add_time | dateFormat('YYYY-MM-DD  hh:mm:ss')}}</span>
                            <span>点击：{{item.click}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>

        </ul>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {date: new Date(), newsList: []};
        },
        methods: {
            getNewList() {
                this.$http.get("getnewslist").then(res => {
                    console.log(res);
                    if (res.body.status === 0) {
                        this.newsList = res.body.message;
                    }
                })
            }
        },
        created: function () {
            this.getNewList()
        }, props:["id"]

    }
</script>
<style lang="scss" scoped>
    .mui-table-view {
        li {
            h1 {
                font-size: 14px;
            }
            .mui-ellipsis {
                color: cornflowerblue;
                font-size: 12px;
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>