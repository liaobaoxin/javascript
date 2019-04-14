var fs=require('fs');
fs.readFile('./he22llo.txt',function (error,data) {
    console.log(data.toString());
});
fs.writeFile('./helloq.txt','2222',function () {

});