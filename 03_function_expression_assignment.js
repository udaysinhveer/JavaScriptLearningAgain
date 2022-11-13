console.log("========write a function expression to get square of the numbers = 5,6,25,100 ========");

var squareFunction = function(value){

console.log(`square of ${value} =`, value*value);
}
 squareFunction(5);
 squareFunction(6);
 squareFunction(25);
 squareFunction(100);

// check the type of function

console.log(`typeOf function is : ${typeof squareFunction}`);

console.log("===============================================================================");
//write a FE to calculate are of triangle base = 45 and height = 34

var areaFunction = function(base, height){

    var areaOfTriangle = 1/2*base*height;
    console.log(`area of triangle is : ${areaOfTriangle}`);

}  
  areaFunction(45,34);

console.log("===============================================================================");
// find area of rectangle, length = 499 and width = 917;

var areaRectangle = function (length, width) {

console.log(`area of rectangle is : ${length*width}`);
    
}
areaRectangle(499, 917)

console.log("===============================================================================");
// WA FE with to arg and should swap the passed values and log on console before swap and after swap.

var swapFunction = function(arg1, arg2){
    console.log("======== Before swap ======");
    console.log(arg1, arg2);
    console.log("======== After swap ======");
    temp =arg1;
    arg1=arg2;
    arg2= temp;
    console.log(arg1, arg2);
}
swapFunction("virat", "Anushka");
swapFunction(1000, 2000)

console.log("===============================================================================");

var stringFunction = function(givenString) {

console.log(`total character available in the string are : ${givenString.length}`);
console.log(`Index of character S is : ${givenString.indexOf("S")}`);
console.log(`Index of string "lang" is : ${givenString.indexOf("lang")}`);
console.log(`last character of string is : ${ givenString.charAt(givenString.length-1)}`); // find last char. 
console.log(`3rd last character of string is : ${ givenString.charAt(givenString.length-3)}`);

}
stringFunction("JavaScript the most popular language");






































