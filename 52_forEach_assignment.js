array_numbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

console.log("===== Log the array elements with its index using forEach() with arrow function ====");

 array_numbers.forEach((element,index)=>{
console.log(`${index} = ${element}`);
});

console.log("===== find the positive numbers and log on console ====");

 array_numbers.forEach((element)=> {
    if (element>0) {
        console.log(element)
    }
});

    console.log("===== find the negative numbers and log on console ====");

    array_numbers.forEach((element)=> {
        if (element<0) {
            console.log(element)
        }
    });
    
    console.log("===== find the even numbers and log on console ====");
    array_numbers.forEach((element)=> {
        if (element%2==0) {
            console.log(element)
        }
    });

    console.log("===== find the sum of all numbers and log on console ====");

   
  let arraySum =  array_numbers.reduce((value, runningTotal)=>{
    return value+runningTotal;
   });
   console.log(arraySum);

   console.log("========== find even positioned numbers =========");
  
   array_numbers.forEach((element, indexValue)=>{
    if (indexValue%2==0) {
        console.log(element);
    }
   });

   console.log("========== find odd positioned numbers if it is negative =========");

   array_numbers.forEach((element, index)=>{
    if (index%2!=0 && element<0) {
        console.log(element);
    }
   })


   console.log("===================================================================================");

   class Employee {
    constructor(empId, empName, empDept, empSalary, empCompany){
        this.empId = empId;
        this.empName = empName;
        this.empDept = empDept;
        this.empSalary = empSalary;
        this.empCompany = empCompany;
    }
}

const empAnil = new Employee(22, "Anil", "IT", 50000, "TCS");
const empRadha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const empRishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const empSonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const empMonika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const empVinay = new Employee(88, "Vinay", "IT", 75000, "TCS");
const empMahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

let array_employees = [empAnil, empRadha, empRishi, empSonali, empMonika, empVinay, empMahi]
console.log("============ Print all employee name using forEach loop ================");

array_employees.forEach((element)=>{
    console.log(element.empName);
})

console.log("============ Print all Department ================");
array_employees.forEach((element)=>{
    console.log(element.empDept);
})

console.log("============ get the list of emp ID ================");
array_employees.forEach((element)=>{
    console.log(element.empId);
})
