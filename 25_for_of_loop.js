// using for of loop we can traverse array and object 

const arrayNumbers = [3, 4, 56, 77, 88];
for (const iterator of arrayNumbers) {    // here "iterator" is a container, we can give any name instead of 
        console.log(iterator);            // giving name iterator
}

console.log("=======================================================================================");
// using for....of loop we can do same things as for loop, but for...of loop is easy and simple 

class Person {
    constructor(fullName, age, gender, city) { 
        this.fullName = fullName
        this.age = age
        this.gender = gender
        this.city = city
    }
    details(){
        console.log(`Person Details ${this.fullName} ${this.age } ${this.gender} ${this.city }`);
    }
}

let personAnil = new Person ("Anil mohite", "31", "Male", "Pune")
let personAnita = new Person ("Anita Golate", "22", "Female", "Mumbai")
let personBill = new Person ("BillGates", "67", "Male", "USA")

const array = [personAnil, personAnita, personBill]

for (const person of array) {
    if (person.age>30) {
        console.log(`${person.fullName} ${person.city} ${person.age} ${person.gender}`);
    }
}