<template>
    <div>
        <div id="slider" class="mui-slider ">
            <div id="sliderSegmentedControl"
                 class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item', item.id==0? 'mui-active':'' ]" v-for="item in cates" :key="item.id">
                        {{item.title}}
                    </a>
                </div>
            </div>
        </div>

       <!-- <ul>
            <li v-for="item in photoList">
                <img  v-lazy="item.img" :key="item.id">
            </li>
        </ul>-->


        <div class="mui-content-padded">
            <p>这是图片放大预览示例，点击如下图片体验全屏预览功能</p>
            <p>
                <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4075680052,587526839&fm=27&gp=0.jpg" data-preview-src="" data-preview-group="1" />
            </p>
            <p>图片全屏后，双击或双指缩放均可对图片进行放大、缩小操作，左右滑动可查看同组(data-preview-group相同的图片为一组)其它图片，点击会关闭预览</p>
            <p>
                <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4075680052,587526839&fm=27&gp=0.jpg" data-preview-src="" data-preview-group="1" />
            </p>
            <p>第三张图片，纯粹为了占位： </p>
            <p>
                <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4075680052,587526839&fm=27&gp=0.jpg" data-preview-src="" data-preview-group="1" />
            </p>
        </div>
    </div>
</template>

<script>
    import mui from '../../lib/js/mui.min.js';

    export default {
        data: function () {
            return {
                cates: [],
                photoList:[]
            }
        },
        created() {
            this.getAllCategory();
            this.getPhotoList();
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
            },
            getPhotoList() {
                this.photoList = [
                    {img: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4075680052,587526839&fm=27&gp=0.jpg", id: 0},
                    {img: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4075680052,587526839&fm=27&gp=0.jpg", id: 1},
                    {img: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4075680052,587526839&fm=27&gp=0.jpg", id: 2},
                    {img: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4075680052,587526839&fm=27&gp=0.jpg", id: 3},
                    {img: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4075680052,587526839&fm=27&gp=0.jpg", id: 4},
                    {img: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4075680052,587526839&fm=27&gp=0.jpg", id: 5}
                ]
            }
        }
    }


</script>

<style lang="scss" scoped="">
img{
    width: 100%;
    height: 100%;
}

</style>