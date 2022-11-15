console.log("=========== Check some interesting facts ================ ");
// following all condition are true
console.log(0=='');
console.log(0=='0');
console.log(0==false);
console.log(null==undefined);
console.log(1==[1]);
console.log(1==true);
console.log(1=='1');


console.log("=========== find the greatest number amongst three numbers 100, 101, 99 ================ ");

var num1= 100, num2 = 101, num3 = 99;
var greatNumber1 = num1>num2 ? num1:num2;
var greatNumber2 = greatNumber1>num3 ? greatNumber1:num3;
console.log(`Great number among three number is : ${greatNumber2}`);
