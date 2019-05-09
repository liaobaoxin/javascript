<template>
    <div>
        <h3>新闻列表--- {{id}}</h3>
        <component-box></component-box>
    </div>
</template>

<script>

    import component from '../subcomponents/component.vue'

    export default {
        data:function () {
            return {
                id:this.$route.params.id
            }
        },
        components:{
            'component-box':component
        }
    }
</script>