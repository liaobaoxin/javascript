var express = require("express");
var fs = require("fs");
app = express();


app.use('/node_modules/', express.static("./node_modules/"));
app.use('/public/', express.static("./public/"));

app.engine('html', require('express-art-template'));
app.get("/", function (req, res) {
    fs.readFile("./db.json", 'utf8', function (error, data) {
        console.log(typeof JSON.parse(data).students);
        res.render("index.html", {
            fruits: [
                '苹果', '香蕉', '橘子'
            ],
            student:JSON.parse(data).students
        });
    });

});

app.listen('80', function () {
    console.log("running .....");
});