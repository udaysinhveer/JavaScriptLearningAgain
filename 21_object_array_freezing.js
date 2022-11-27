const person = {
    name: "Mohit",
    rollNO : "1234"
}
Object.freeze(person) // 

person.name = "Mohit Sharma"; // modification not considered because person object is freezed.
person.street = "As Club"; // adding new property is not considered because person object is freezed.

console.log(person);

const arrayNumbers = [2, 4, 5, 6, 7];
Object.freeze(arrayNumbers);
arrayNumbers.push(99); // we cannot add, remove,update any property because array is freezed
console.log(arrayNumbers);    