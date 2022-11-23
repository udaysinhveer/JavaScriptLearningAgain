let iperson = {
    name : "Uday",
    age : 23,
    city : "Pune",
}
console.log(iperson.name, iperson.age,  iperson.city);
console.log(iperson);

let istudent = {...iperson} // here we use ... spread operator to avoid shallow copy

istudent.city = "Mumbai";
iperson.age = 25;
console.log(istudent.city, iperson.city);
console.log(istudent.age, iperson.age);

console.log("=================================================================================");

// in nested object spread operator will not work, that time we use JSON

let person = {
    name: "Mohit",
    age : 31,
    city : "Pune",
    address: {
        pin: 431202,
        street: "Kanch pokali"
    }
}
console.log(person.name, person.age, person.city);
console.log(person);
// let student = {...person};
let student=JSON.parse(JSON.stringify(person)) // JSON, will work if object is nested

student.city = "Mumbai";
person.age = 33;
console.log(student.city, person.city);
console.log(student.age, person.age);

student.address.street = "Khav Galli";
console.table(person);
console.table(student);

console.log(student.address.street); // we said fail, because it will return "khav galli" twice and 
console.log(person.address.street);  // not do deep copy

// in this condition we use JSON

console.log("================================= JSON ============================ ");

// JSON is used to communicate between frontend and backend

/**Abc.json  —> JS objection notation 
 {
    “Name” : “Mohit”,
    “age” : 32,
     “address” : {
         “pin”: 12345,
          “city”: “Pune”
      }  
    }
 */