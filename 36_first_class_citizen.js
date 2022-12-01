// Functions are known as first class citizens in JavaScript It is because of three reasons

// 1. Function can be stored in a variable ----> function expression
// 2. Function can be passed as an argument to another function ----> callback

// 3. A function can return another function -----> 

function message (){
    console.log("Inside message function");
    return function(){
        console.log("Inside inner function");
    }
}

message()(); // here we call first "message function" and again provide arg as a 2nd function