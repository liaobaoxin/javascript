<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in LunBoList" :key="item.name">{{item.name}}</mt-swipe-item>
        </mt-swipe>


        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="home/newsList">
                <img src="../../image/menu1.png" alt="">
                <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
               <img src="../../image/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
               <img src="../../image/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../image/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../image/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../image/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div></a></li>

        </ul>
    </div>




</template>



<script>


    import { Toast } from 'mint-ui';

    export default {
        data() {
            return {
                LunBoList: []
            }
        },
        created() {
            this.getLunBoList();
            console.log(this.LunBoList);
        },
        methods: {
            getLunBoList() {
                this.LunBoList = [
                    {name: "图1"},
                    {name: "图2"},
                    {name: "图3"},
                    {name: "图4"}
                ];
                Toast('OK');
            }
        }

    }
</script>

<style lang="scss" scoped>
    .mint-swipe {
        height: 200px;
        .mint-swipe-item {
            background-color: pink;
        }
    }
    .mui-grid-view.mui-grid-9{
        background-color: #fff;
        .mui-table-view-cell{
            border: none;
            img{
                width: 60px;
                height: 60px;
            }
            .mui-media-body{
                font-size: 13px;
            }
        }
    }
</style>