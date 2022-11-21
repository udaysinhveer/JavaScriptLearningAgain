
let uday = {                            
    fullName : "Udaysinh Veer",       
    city : "Pune",
    age : 23,
   "isMarried" : true,            
}

for (const key in uday) {
    if (Object.hasOwnProperty.call(uday, key)) {
        const element = uday[key];
        console.log(element);
    }
}

console.log("=========== Another way to use for in loop ==========");

for (const key in uday) {
        const element = uday[key]; // without using if condition we can use for in loop
        console.log(element);
}



