var express = require("express");
var router = express.Router();
var Students = require('./student');
router.get("/students", function (req, res) {
        Students.find(function (err,data) {
            res.render("index.html", {
                fruits: [
                    '苹果', '香蕉', '橘子'
                ],
                student:data
            });
        });


});

router.get("/students/new", function (req, res) {
    res.render("new.html");
});

router.post("/students/new", function (req, res) {
    Students.save(req.body,function (err) {
       res.redirect('/students');
    });
});

router.get("/students/edit", function (req, res) {
    Students.findById(req.query.id,function (student) {
        res.render("edit.html", {
            student:student
        });
    });

});

router.post("/students/edit", function (req, res) {
    Students.updateById(req.body,function () {
        res.redirect('/students');
    })
});

router.get("/students/delete", function (req, res) {
    Students.deleteById(req.query.id,function () {
        res.redirect('/students');
    })
});




module.exports=router;