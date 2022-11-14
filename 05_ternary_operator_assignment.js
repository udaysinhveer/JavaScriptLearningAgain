console.log("======================= find Greatest Number ===========================");

var greatNumber = function(num1, num2){
    var checkGreater = num1>num2? num1:num2;
    console.log(`Greatest number is : ${checkGreater}`);

} 
greatNumber(10,-10)
greatNumber(800,899)

console.log("======================= find EVEN or ODD ===========================");

var evenOrOdd = function(arg1){

var checkEvenOdd = arg1%2==0? "Even": "Odd";
return checkEvenOdd;

}
console.log(`Number 29 is : ${evenOrOdd(29)}`);
console.log(`Number 44 is : ${evenOrOdd(44)}`);
console.log(`Number 0 is : ${evenOrOdd(0)}`);
console.log(`Number 101 is : ${evenOrOdd(101)}`);


console.log("======================= find String length EVEN or ODD ===========================");

var stringLengthEvenOdd = function(arg){

    var StringLength = arg.length;
    var evenOdd = StringLength%2==0? "Even" : "Odd";
    console.log(`Length of String "${arg}" is ${StringLength} : ${evenOdd}`);

}
stringLengthEvenOdd("javaScript");
stringLengthEvenOdd("developer");
stringLengthEvenOdd("Google");









