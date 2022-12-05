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

let array_emps = [empAnil, empRadha, empRishi, empSonali, empMonika, empVinay, empMahi]

console.log("======= Find all employees from Wipro company ========");

 array_emps.filter((element)=>{
     if (element.empCompany == "Wipro") {
      console.table(element);
    }
});

console.log("======= Find all employees from IT or HR dept ========");

array_emps.filter((element)=>{
    if (element.empDept== "IT" || element.empDept == "HR") {
     console.log(element);
   }
});

console.log("======= Find all employees whose empID is greater than 50 ========");

 array_emps.filter((element)=>{
    if (element.empId>50) {
        console.log(element);
    }
});

console.log("======= Find all employees whose name startsWith A, V or M ========");

array_emps.filter((element)=>{
 if (element.empName.startsWith("A")||element.empName.startsWith("V")||element.empName.startsWith("M")) {
        console.log(element);
    }
});

console.log("================ Find the Avg salary of all employees ==================");
var salaryCount = 0;
let avgSalary = array_emps.filter((element)=>{
     let empPagar = element.empSalary
    salaryCount = salaryCount+empPagar;
    avgTotalSalary = salaryCount/array_emps.length;
});
console.log(`Average salaray of employees is : ${avgTotalSalary}`);

console.log("============= Find IT dept Avg Salary ==============");

let arrayOfItDepEmp=[];
array_emps.filter((value)=>{
    if(value.empDept==='IT'){
        arrayOfItDepEmp.push(value);
    }
    return arrayOfItDepEmp;
});
let averageSalary2=0;
arrayOfItDepEmp.filter((value)=>{
    if(value.empDept==='IT'){
        averageSalary2+=value.empSalary;
    }
    return averageSalary2;
});
console.log(`Average salary of IT dept employees = `,(averageSalary2/arrayOfItDepEmp.length))