var express = require("express");
var bodyParser = require('body-parser')
app = express();


app.use('/node_modules/', express.static("./node_modules/"));
app.use('/public/', express.static("./public/"));
// 添加json解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.engine('html', require('express-art-template'));
app.use(require('./router'));

app.listen('80', function () {
    console.log("running .....");
});