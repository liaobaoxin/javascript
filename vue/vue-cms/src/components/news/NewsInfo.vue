<template>
    <div class="newsInfo-container">
        <h3 class="title">{{newsInfo.title}}</h3>
        <div class="subtitle">
            <div class="time">发表时间：{{newsInfo.add_time | dateFormat}}</div>
            <div class="click">点击：{{newsInfo.click}}次</div>
        </div>
        <hr>
        <div class="content" v-html="newsInfo.content"></div>

        <component-box></component-box>
    </div>
</template>

<script>

    import component from '../subcomponents/component.vue'

    export default {
        data: function () {
            return {
                id: this.$route.params.id,
                newsInfo: null
            }
        },
        components: {
            'component-box': component
        }, methods: {
            getnew() {
                this.$http.get("getnew/" + this.id).then(res => {

                    if (res.body.status === 0) {
                        this.newsInfo = res.body.message[0];
                    }
                });
            }
        }, created: function () {
            this.getnew()
        }
    }
</script>

<style scoped lang="scss">
    .newsInfo-container {
        padding: 0px 4px;
        .title {
            margin: 15px 0;
            color: red;
            font-size: 15px;
            text-align: center;
        }
        .subtitle{
            display: flex;
            justify-content: space-around;
            font-size: 13px;
            color: #26a2ff;
        }
    }
</style>