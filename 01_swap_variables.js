var my_number = 100;
var your_Number = 200;

console.log("============== before swap ============");

console.log(my_number, your_Number);

console.log("============== After swap ==============");
var temp = my_number;
var my_number = your_Number;
var your_Number= temp;

console.log(my_number, your_Number);