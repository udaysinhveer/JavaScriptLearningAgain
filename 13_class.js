class Person { // class name first letter should be in capital later 

    constructor(fullName, age, gender, city) { // this is arg of constructor function
        this.fullName = fullName // use of this keyword is must 
        this.age = age
        this.gender = gender
        this.city = city
    }
    details(){

        console.log(`Person Details ${this.fullName} ${this.age } ${this.gender} ${this.city }`);
    }
}

// object creation using class property, here uday and nikhil this are two objects 
let uday = new Person("Udaysinh Veer", 23, "Male", "Pune") // here we pass the values for class constructor 
let nikhil = new Person("Nikhil Sabale", 26, "Male", "Mumbai")

console.table(uday);
console.table(nikhil);

// call detail function/method
uday.details();


console.log("======== Add, Update, delete, the property in object when we used class ==========");
//update
uday.age = 25;
console.table(uday);

// add
nikhil.hometown = "Karmala";
console.table(nikhil);

//delete
delete nikhil.gender;
console.table(nikhil);

console.log("=========================== Operator 'instanceof' ================================");
var checkInstanceOf1 = uday instanceof Person;  // uday is object and Person is class
console.log(checkInstanceOf1);
var  sachin; // here we declare empty sachin variable, because it occurs error
var checkInstanceOf2 = sachin instanceof Person;
console.log(checkInstanceOf2);