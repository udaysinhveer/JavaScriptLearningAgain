class Person {

    constructor(fullName, age, gender, city) { 
        this.fullName = fullName
        this.age = age
        this.gender = gender
        this.city = city
    }
    // details(){

    //     console.log(`Person Details ${this.fullName} ${this.age } ${this.gender} ${this.city }`);
    // }
}
let personAnil = new Person ("Anil mohite", "31", "Male", "Pune")
let personAnita = new Person ("Anita Golate", "22", "Female", "Mumbai")
let personBill = new Person ("BillGates", "67", "Male", "USA")


const array = [personAnil, personAnita, personBill]

for (let index = 0; index < array.length; index++) {     // here we traverse this object array 
    const element = array[index];
    console.log(`${element.fullName} ${element.city} ${element.age} ${element.gender}`);
}

