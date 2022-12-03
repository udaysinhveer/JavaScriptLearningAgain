console.log("================================= Object Destructuring ===========================");
let person = {
    fullName : "Udaysinh Veer",
    city : "Pune",
    pin : 411030,
    state : "Maharashtra",
    isMarried : false,
    age :23
}

// let fullName = person.fullName;        | instead of writing in this traditional way we write 
// let age = person.age;                  | code in the from of object destructuring 
// let city = person.city;
// let pin = person.pin;
// let state = person.state;
// let isMarried = person.isMarried;

// console.log(fullName, age, city, pin, state, isMarried);

let {fullName,age, city, pin, state = "UP",isMarried,country="India"} = person;//object destructuring   
console.log(fullName, age, city, pin, state, isMarried,country);

// here we added country in object destructuring and it will print as a default value.
// in object destructuring we added state = "up", but it will not give result "UP" because
// state value already assigned in person object. 

console.log("============================ Array Destructuring ===========================");

let arrayOfFruits = ["Bananas", "Mango", "Orange", "Papayas", "Pineapples"]

// let ele0 = arrayOfFruits[0];
// let ele1 = arrayOfFruits[1];    // instead of writing this traditional and big code...
// let ele2 = arrayOfFruits[2];    // we create array destructuring
// let ele3 = arrayOfFruits[3];
// let ele4 = arrayOfFruits[4];
// console.log(ele0, ele1, ele2, ele3, ele4);

let [ele0, ele1, ele2, ele3, ele4] = arrayOfFruits; // this is array destructuring 
console.log(ele0, ele1, ele2, ele3, ele4);