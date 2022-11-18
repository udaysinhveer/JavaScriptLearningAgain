console.log("============================== var ===============================");

// var - we can reinitialize and update var variable multiple times 
var num = 10;
var num = 20;
var num = 35;
console.log(num);

console.log("============================== let ===============================");
// let - we can update let variable value multiple time, but we cannot reinitialize to let variable 
let count = 2;
count = 4;
count = 7;
console.log(count);

console.log("============================== const ===============================");
// const - we cannot update or reinitialize const variable
// const - variable declaration and value assign must be on same line 

const PI = 3.14;
console.log(PI);
