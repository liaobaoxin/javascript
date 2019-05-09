<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in LunBoList" :key="item.name">{{item.name}}</mt-swipe-item>
        </mt-swipe>
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
            background-color: red;
        }
    }
</style>