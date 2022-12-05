
let map_employees = new Map();

map_employees.set(22, "emp_anil");
map_employees.set(33, "emp_radha");
map_employees.set(55, "emp_rishi");
map_employees.set(66, "emp_sonali");
map_employees.set(77, "emp_monika");
map_employees.set(88, "emp_vinayak");
map_employees.set(99, "emp_mahi");

console.log("================= Traverse this using forEach loop ===================");

 map_employees.forEach((key, value)=>{
 console.log(key, value);
});
