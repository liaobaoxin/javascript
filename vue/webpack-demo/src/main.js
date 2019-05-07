import $ from "jquery";
import "./css/index.css"
import "bootstrap/dist/css/bootstrap.css"
$(function () {
  $("h1").css('backgroundColor','red')
});

class Person{
  static info={name:'zs',age:20}
}
console.log(Person.info);