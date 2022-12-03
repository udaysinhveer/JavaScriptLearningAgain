
function divide (x,y=2){  // here we add default value for arg - y=2, it will be execute, because we
    console.log(x/y);     // not pass value for y 
}
divide (10,4)
divide (10)

console.log("===============================================================================");

function divides (x,y=2){  // here we add default value for arg - y = 2 but it will not execute because
    console.log(x/y);      // we pass value 5 a valid value for y. 
}
divides (10,5)