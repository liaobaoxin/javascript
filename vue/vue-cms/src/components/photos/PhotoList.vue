<template>
    <div id="slider" class="mui-slider ">
        <div id="sliderSegmentedControl"
             class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
            <div class="mui-scroll">
                <a :class="['mui-control-item', item.id==0? 'mui-active':'' ]"  v-for="item in cates" :key="item.id"  >
                   {{item.title}}
                </a>
            </div>
        </div>

    </div>
</template>

<script>
    import mui from '../../lib/js/mui.min.js';

    export default {
        data: function () {
            return {
                cates: []
            }
        },
        created() {
            this.getAllCategory();
        },
        mounted() {
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },

        methods: {
            getAllCategory() {
                this.cates = [
                    {title: "全部", id: 0},
                    {title: "家居生活", id: 1},
                    {title: "摄影设计", id: 2},
                    {title: "明星美女", id: 3},
                    {title: "测试1", id: 4},
                    {title: "测试2", id: 5}
                ]
            }
        }
    }



</script>

<style lang="scss" scoped="">


</style>