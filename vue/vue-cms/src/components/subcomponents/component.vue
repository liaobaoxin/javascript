<template>
    <div class="cmt-container">
        <div>
            <h3>发表评论</h3>
        </div>

        <textarea placeholder="请输入评论内容最多120字" rows="5" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,index) in comments" :key="index">
                <div class="cmt-title">
                    第{{ index + 1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time | dateFormat
                    }}
                </div>
                <div class="cmt-body">
                    {{ item.content === 'undefined' ? '此用户很懒，嘛都没说' : item.content }}
                </div>
            </div>
        </div>
        <mt-button type="primary" size="large" plain @click="getMore">加载更多</mt-button>
    </div>

</template>

<script>
    import {Toast} from "mint-ui";

    export default {
        data: function () {
            return {
                pageIndex: 1,
                comments: [],
                msg: ""
            }
        },
        methods: {
            getComments() {
                this.$http.get("getcomments/" + this.id + "?pageindex=" + this.pageIndex).then(res => {
                    if (res.body.status === 0) {

                        this.comments = this.comments.concat(res.body.message)
                    }
                });
            },
            getMore() {
                this.pageIndex++;
                this.getComments();
            },
            postComment() {
                // 校验是否为空内容
                if (this.msg.trim().length === 0) {
                    return Toast("评论内容不能为空！");
                }

                // 发表评论
                // 参数1： 请求的URL地址
                // 参数2： 提交给服务器的数据对象 { content: this.msg }
                // 参数3： 定义提交时候，表单中数据的格式  { emulateJSON:true }
                this.$http.post("postcomment/" + this.id, {
                    content: this.msg.trim()
                }).then(function (result) {
                    if (result.body.status === 0) {
                        // 1. 拼接出一个评论对象
                        var cmt = {
                            user_name: "匿名用户",
                            add_time: Date.now(),
                            content: this.msg.trim()
                        };
                        this.comments.unshift(cmt);
                        this.msg = "";
                        Toast(result.body.message)

                    }
                });
            }

        },
        created: function () {
            this.getComments();
        }, props: ["id"]
    }
</script>
<style lang="scss" scoped>
    .cmt-container {
        h3 {
            font-size: 18px;
        }
        textarea {
            font-size: 14px;
            height: 85px;
            margin: 0;
        }

        .cmt-list {
            margin: 5px 0;
            .cmt-item {
                font-size: 13px;
                .cmt-title {
                    line-height: 30px;
                    background-color: #ccc;
                }
                .cmt-body {
                    line-height: 35px;
                    text-indent: 2em;
                }
            }
        }
    }

</style>
