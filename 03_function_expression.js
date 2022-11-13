// function expression is also called anonymous function. 
// anonymous function means function without name 
// but here we can store function as a value in variable 
// here test() is a not name of function, this is variable in this we store function as a value 

var test = function (arg1, arg2) {

console.log(" function expression", arg2);
return "FUNCTION EXPRESSION";

}
var returnValue = test(10, 20);
console.log(returnValue);