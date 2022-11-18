console.log("========================= object (uday) ================================");

let uday = {                             // uday is object 

    fullName : "Udaysinh Veer",         // fullName : is key || "Udaysinh veer" is value 
    city : "Pune",
    age : 23,
   "isMarried" : true,                 // we can write key in string format
}
console.table(uday);                // here we use table instead of lof to return values in table format 

console.log("============ Access specific property from object ==================");
console.log(uday.fullName);      // this is method to  access specific property from object 
console.log(uday["age"]);       // this is another method to  access specific property from object

console.log("============ Add/Update property into object ==================");

uday.pinCode = 413203;       // here we add tow property into object pinCode and profession
uday.profession = "Student";
// update property value 
uday.fullName = "Udaysinh Atmaram Veer";
console.table(uday);

console.log("============ Delete property of object ==================");

delete uday.age;  // using delete keyword we delete age of object 
console.table(uday);

console.log("============ total Entries, keys and values in object ==================");

console.log(Object.entries(uday)); // here we check how many entries/properties in this array
console.log(Object.keys(uday)); // count total number of keys in this object
console.log(Object.values(uday)); // count total numbers of values in this object 

console.log("========================= Empty Object ================================");

let collegeAbc = {

    // this is empty object, mean this object have not key and values

}
console.log(collegeAbc);


