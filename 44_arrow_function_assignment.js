//1
let greeting = ()=>{
    console.log("Good Evening, today is Saturday")
}
greeting()

//2
let multiplication = (num1, num2, num3=3)=>{
console.log(`Multiplication of ${num1}, ${num2} and ${num3} is : ${num1*num2*num3}`);
}
multiplication(5, 5, 2)
multiplication(10,4)

//3
let addition = (arg1, arg2, arg3, arg4, arg5)=>{
return arg1 + arg2 + arg3 + arg4 + arg5;
}
console.log( `Addition is : `,addition(100, 100, 200, 349,756));
console.log(addition("i am", " learning", " ES6", " Features", " in depth"));