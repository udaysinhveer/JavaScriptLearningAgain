let learnmap = new Map();

learnmap.set(22, "Sachin");
learnmap.set(11, "Dravid");
learnmap.set(33, "Gaungully");
learnmap.set(77, "Sachin");
learnmap.set(11, "Rahul");  // here we add duplicate key 11 with different value "Rahul", here it will not
                            // return value of 1st duplicate key, it will return "Rahul"
console.table(learnmap);
console.table(learnmap);

console.log("============ Retrieving the value ============");

let mapValue = learnmap.get(33) // 33 is a key 
console.log(mapValue);
let mapValue1 = learnmap.get(99) // 99 is not available in map, it will return undefined 
console.log(mapValue1); 

console.log("============ Delete Record ============");
learnmap.delete(11)  // it will delete key along with value 
console.table(learnmap); 

console.log("============ is key available in map or not  ============");

console.log(learnmap.has(22));
console.log(learnmap.has(59)); 

console.log("============ traverse array using for...of loop  ============");

let serOfKeys = learnmap.keys() // it will return all the keys 

for (const mapKeyValue of serOfKeys) {
    console.log(learnmap.get(mapKeyValue));
}


console.log("=================== Add object in map as a value =================");


class Person {
    constructor(rollNo, fullName, city, age, gender){
        this.rollNo = rollNo;
        this.fullName = fullName;
        this.city = city;
        this.age = age;
        this.gender = gender;}

        details(){
        console.log(`Person Details: ${this.rollNo} ${this.fullName} ${this.city} ${this.age} ${this.gender}`);
        }
    }
            let personAnil = new Person(22,"Anil Mohite", "Pune", 31, "Male");
            let personAnita = new Person(33, "Anita Golate", "Mumbai", 22, "Female");
            let personBill = new Person(44, "Billgates", "USA", 67, "Male");
            let mapOfPersons = new Map();
            mapOfPersons.set(22, personAnil);
            mapOfPersons.set(33, personAnita);
            mapOfPersons.set(44, personBill);
            let mapKeys = mapOfPersons.keys();     // 22 33 44
            for (const key of mapKeys) {
                let personObject = mapOfPersons.get(key);
                personObject.details();      // details will print all the details of personObject
            }