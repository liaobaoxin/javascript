var exports = module.exports;
var fs = require('fs');
var path = './db.json';
exports.find = function (callback) {
    fs.readFile(path, 'utf8', function (err, data) {
        if (err) {
            callback(err);
        }
        callback(null, JSON.parse(data).students);

    })
};

exports.save = function (student, callback) {
    fs.readFile(path, 'utf8', function (err, data) {
        var students = JSON.parse(data).students;
        console.log(students);
        student.id = students[students.length - 1].id + 1;
        students.push(student);
        fs.writeFile(path, JSON.stringify({"students": students}), "utf-8", function (err) {
            if (err) {
                callback(err)
            } else {
                callback();
            }

        })
    })
};

exports.findById = function (id, callback) {
    fs.readFile(path, 'utf8', function (err, data) {
        var students = JSON.parse(data).students;
        id = parseInt(id);
        var student = students.find(function (item) {
            return item.id === id;
        });
        callback(student);

    })
};


exports.updateById = function (newStudent, callback) {
    fs.readFile(path, 'utf8', function (err, data) {
        var students = JSON.parse(data).students;
        newStudent.id = parseInt(newStudent.id);
        var student = students.find(function (item) {
            return item.id === newStudent.id;
        });

        for (key in newStudent) {
            student[key] = newStudent[key];
        }
        fs.writeFile(path, JSON.stringify({"students": students}), "utf-8", function () {
            callback()
        })

    })
};


exports.deleteById = function (id, callback) {
    fs.readFile(path, 'utf8', function (err, data) {
        var students = JSON.parse(data).students;

        var index = students.findIndex(function (item) {
            return item.id === parseInt(id);
        });

        students.splice(index,1);

        fs.writeFile(path, JSON.stringify({"students": students}), "utf-8", function () {
            callback()
        })

    })
};