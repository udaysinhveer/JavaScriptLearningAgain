var myResult = 0/0;
console.log(myResult);
console.log(typeof myResult); // typeof NaN is "Number";

// type conversion
// typeof NaN is number 
// if we convert name string in number it give result NaN, but typeof that string is Number 

console.log("========= type conversion string to number ============");

var myName = "Uday";
var myAge = "31";
console.log(typeof myName);
console.log(typeof myAge);

var myAgeInNumber = +myAge;
console.log(myAgeInNumber, typeof myAgeInNumber);

var myNameInNumber = +myName;
console.log(myNameInNumber, typeof myNameInNumber);


console.log("========= type conversion number to string ============");
var num1 = 102;
 var num1 = num1.toString();
 console.log(num1, typeof num1);




