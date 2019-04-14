var express=require('express');
var app=express();

app.get('/',function (req,res) {

   res.send("你好");
});

app.listen(3000,function () {
    console.log("项目启动了");
});

