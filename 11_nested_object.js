// nested object mean - object inside object

let uday = {                           

    fullName : "Udaysinh Veer",          
    city : "Pune",
    age : 23,
   isMarried : true,
   address : {         // this address is a nested object, but address is also one key of uday object.

    street: "ABC road",
    city: "Pune", 
    pinCode: 411030,
    state : "Maharashtra",
   }               
}

console.table(uday);
console.table(uday.address); // we can print only nested object also 
console.log(uday.address.street); // here we access property from nested object
