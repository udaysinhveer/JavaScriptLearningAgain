// this method where used before introducing class method in ES6

function Person(fullName, age, gender, city){
this.fullName = fullName;
this.age = age;
this.gender = gender;
this.city= city;

}
Person.prototype.country = "India" // here we create country as a prototype

let veer = new Person ("Amar veer", 27, "Male", "Solapur")
let bhoge = new Person ("Dada Bhoge", 28, "Male", "Sade")

console.log(veer);
console.log(bhoge);

console.log(veer.country); // here we call/ use prototype 'country'
console.log(bhoge.country);