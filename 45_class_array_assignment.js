
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

console.log("1.find the all the employees working in TCS and log only employee names and company name");
 
for (const employee of array_employees) {
    if (employee.empCompany=="TCS") {
    console.log(`Employee Name :${employee.empName},Company : ${employee.empCompany}`);
    }
}

console.log("2. find the finance dept employees, log only dept and emp name on console");

for (const employee of array_employees) {
    if (employee.empDept=="Finance") {
        console.log(`Employee Department :${employee.empDept}, Name : ${employee.empName}`);
    }
}
console.log("3. find the employee whose salary is greater than 70000, print empName, company and salary");

for (const employee of array_employees) {
    if (employee.empSalary>70000) {
        console.log(`Name:${employee.empName},Company: ${employee.empCompany}, Salary: ${employee.empSalary}`);
    }
}

console.log("4. find the employee whose name start with R and complete print all details");

for (const employee of array_employees) {
    if (employee.empName.startsWith("R")) {
    console.log(`Name:${employee.empName},Company: ${employee.empCompany},
     Salary: ${employee.empSalary}, ID: ${employee.empId}, Department: ${employee.empDept}`);
    }
}

console.log("5.find the emp whose salary greater than or equal 50000 and from IT dept,print all details");

for (const employee of array_employees) {
    if (employee.empSalary>=50000 && employee.empDept=="IT") {
        console.log(`Name:${employee.empName},Company: ${employee.empCompany},
     Salary: ${employee.empSalary}, ID: ${employee.empId}, Department: ${employee.empDept}`);
    }
}

console.log("6 .find the all employees from company infy and print all details");

for (const employee of array_employees) {
    if (employee.empCompany=="Infy") {
        console.log(`Name:${employee.empName},Company: ${employee.empCompany},
        Salary: ${employee.empSalary}, ID: ${employee.empId}, Department: ${employee.empDept}`);
    }
}