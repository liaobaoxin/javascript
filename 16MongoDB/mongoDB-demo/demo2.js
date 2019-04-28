var mongoose = require('mongoose');
var Schema=mongoose.Schema;
mongoose.connect('mongodb://localhost/test');

var userSchema=new Schema({
   username:{
       type:String,
       require:true
   },
    password:{
       type:String,
        require:true
    },
    email:{
       type:String
    }
});

var User=mongoose.model('User',userSchema);
//增加
var user=new User({username:"李四",password:"123456",email:"123456@qq"});
/*user.save(function (err,res) {
    if (err){

    }else {
        console.log("保存成功");
        console.log(res);
    }
});*/
/*
User.find({
  username:"张三"
},function (err,res) {
    console.log(res);

});
*/

//删除
/*User.remove({
    username:"张三"
},function (err,res) {
    console.log(res);

});*/

//更新
User.findByIdAndUpdate('5cc3c6693e623b04843bd4d0',{password:"852"},function (err,res) {
    console.log(res);

});
