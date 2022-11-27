// deep cloning of object using assign

const student = {
    name : "Mohit",
    rollNO : 1234,
}
let studentClone = Object.assign({}, student);
studentClone.name = "Mohit sharma";
console.log(student);                // deep cloning 
console.log(studentClone);

// merge two object using assign 

const uday = {
    name : "Udaysinh Veer",
    Eduction : "BA",
}
const udayAddress = {
    city : "Pune",
    Street : "AM college Road",
}

let mergedObject = Object.assign({}, uday, udayAddress); // here we merged to object in one empty object 
console.log(mergedObject);


