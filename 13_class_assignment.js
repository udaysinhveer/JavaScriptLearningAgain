console.log("========================== Class - Vehicle ==============================");
class Vehicle {
constructor(companyName, model,price,color){
    this.companyName = companyName;
    this.model = model;
    this.price = price;
    this.color = color;

} 

}
let bike = new Vehicle("KTM", 212, 75000, "Red");
let car = new Vehicle("Maruti Car", 378, 650000, "White");
let jeep = new Vehicle("Thar", 09, 1900000, "Active Black");
let bus = new Vehicle("Lal Pari", 12, 2000000, "Red and white");
let flight = new Vehicle("AirIndia", 01, 450000000, "Silver");
console.table(bike);
console.table(car);
console.table(jeep);
console.table (bus);
console.table(flight);

console.log("========================== Class - College ==============================");

class College{
constructor(collegeName, naacGrade, famousFor, EstablishedIn ){
this.collegeName = collegeName;
this.naacGrade = naacGrade;
this.famousFor = famousFor;
this.EstablishedIn = EstablishedIn;
}

}

let college1 = new College ("YCM Karmala", "B", "Arts", 1995,)
let college2 = new College ("Ferguson College Pune", "A", "History", 1890,)
let college3 = new College ("AM college Hadapsar", "C", "Science", 2005,)
let college4 = new College ("SP College", "B++", "Law", 1850,)
console.table(college1);
console.table(college2);
console.table(college3);
console.table(college4);

console.log(" ==================== traverse Object using for in loop ================");

function traverseObject(arg) {
for (const key in arg) {
        const element = arg[key];
        console.log(key, " ", element);
       
}
}
traverseObject(college1)
console.log("==============================");
traverseObject(college2)
console.log("==============================");
traverseObject(college3)
console.log("==============================");
traverseObject(college4)